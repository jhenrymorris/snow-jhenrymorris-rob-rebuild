"""Build the controlled native Document Templates PDF from NSF Form 1768.

The source PDF remains unchanged. This script adds only the approved electronic
extensions and the separate governance metadata fields used by R4.
"""

from pathlib import Path

from pypdf import PdfReader, PdfWriter
from pypdf.generic import ArrayObject, FloatObject, NameObject
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "docs" / "source-forms" / "NSF-Form-1768-April-2026.pdf"
TMP_DIR = ROOT / "tmp" / "pdfs"
OUTPUT = ROOT / "output" / "pdf" / "ROB-Form-1768-Authorization-Template.pdf"
OVERLAY = TMP_DIR / "form1768-electronic-overlay.pdf"


def text_field(form, name, x, y, width, height=10):
    form.textfield(
        name=name,
        x=x,
        y=y,
        width=width,
        height=height,
        borderWidth=0.5,
        borderColor=None,
        fillColor=None,
        textColor=None,
        forceBorder=True,
        fontName="Helvetica",
        fontSize=6,
    )


def build_overlay():
    c = canvas.Canvas(str(OVERLAY), pagesize=(612, 792))
    c.showPage()

    c.setFont("Helvetica-Bold", 7)
    c.drawString(40, 403, "Electronic-only extension:")
    c.acroForm.checkbox(
        name="IPA",
        x=145,
        y=400,
        size=10,
        buttonStyle="check",
        borderWidth=0.7,
        forceBorder=True,
    )
    c.setFont("Helvetica", 7)
    c.drawString(159, 402, "IPA")

    c.acroForm.checkbox(
        name="Workforce Profile Charts",
        x=40,
        y=299,
        size=10,
        buttonStyle="check",
        borderWidth=0.7,
        forceBorder=True,
    )
    c.drawString(54, 301, "Workforce Profile Charts (electronic-only)")

    c.setFillColorRGB(1, 1, 1)
    c.rect(39, 125, 533, 66, fill=1, stroke=0)
    c.setFillColorRGB(0, 0, 0)
    c.setFont("Helvetica-Bold", 7)
    c.drawString(40, 183, "ELECTRONIC AUTHORIZATION METADATA")
    c.setLineWidth(0.5)
    c.line(40, 180, 572, 180)

    labels = [
        ("Authorization Number", "Authorization Number", 40, 166, 166),
        ("HR Case Number", "HR Case Number", 220, 166, 166),
        ("Form Version", "Form Version", 400, 166, 166),
        (
            "Employee Signature Date/Time",
            "Employee Signature Date/Time",
            40,
            148,
            166,
        ),
        (
            "Supervisor Signature Date/Time",
            "Supervisor Signature Date/Time",
            220,
            148,
            166,
        ),
        ("Decision Type", "Decision Type", 400, 148, 166),
        ("Effective Date", "Effective Date", 40, 130, 166),
        ("Expiration Date", "Expiration Date", 220, 130, 166),
        ("Generated Date/Time", "Generated Date/Time", 400, 130, 166),
    ]
    c.setFont("Helvetica", 5.5)
    for label, field_name, x, y, width in labels:
        c.drawString(x, y + 11, label)
        text_field(c.acroForm, field_name, x, y, width)

    c.save()


def build_template():
    TMP_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    build_overlay()

    source = PdfReader(str(SOURCE))
    overlay = PdfReader(str(OVERLAY))
    for annotation_ref in source.pages[1].get(NameObject("/Annots"), []):
        annotation = annotation_ref.get_object()
        if annotation.get(NameObject("/T")) == "Justification":
            rect = annotation[NameObject("/Rect")]
            rect[1] = FloatObject(191)
    writer = PdfWriter()
    writer.clone_document_from_reader(source)
    writer.pages[1].merge_page(overlay.pages[1])

    target_page = writer.pages[1]
    target_annots = target_page.get(NameObject("/Annots"))
    if target_annots is None:
        target_annots = ArrayObject()
        target_page[NameObject("/Annots")] = target_annots
    elif hasattr(target_annots, "get_object"):
        target_annots = target_annots.get_object()

    # merge_page() already copied the overlay widgets into /Annots. Register
    # those exact widget objects in the canonical AcroForm tree; cloning and
    # appending them again creates duplicate widgets that Australia's native
    # Document Templates canvas cannot parse.
    target_acroform = writer.root_object[NameObject("/AcroForm")].get_object()
    target_fields = target_acroform[NameObject("/Fields")]
    existing_field_names = {
        field_ref.get_object().get(NameObject("/T")) for field_ref in target_fields
    }
    for annotation_ref in target_annots:
        annotation = annotation_ref.get_object()
        field_name = annotation.get(NameObject("/T"))
        if (
            annotation.get(NameObject("/Subtype")) == NameObject("/Widget")
            and field_name
            and field_name not in existing_field_names
        ):
            annotation[NameObject("/P")] = target_page.indirect_reference
            target_fields.append(annotation_ref)
            existing_field_names.add(field_name)

    writer.set_need_appearances_writer(False)
    with OUTPUT.open("wb") as stream:
        writer.write(stream)

    reopened = PdfReader(str(OUTPUT))
    fields = reopened.get_fields() or {}
    expected = {
        "IPA",
        "Workforce Profile Charts",
        "Authorization Number",
        "HR Case Number",
        "Form Version",
        "Employee Signature Date/Time",
        "Supervisor Signature Date/Time",
        "Effective Date",
        "Expiration Date",
        "Decision Type",
        "Generated Date/Time",
    }
    missing = expected - set(fields)
    if missing:
        raise RuntimeError(f"Missing electronic template fields: {sorted(missing)}")
    if len(reopened.pages) != 2:
        raise RuntimeError("Form 1768 template must remain exactly two pages")
    widget_count = sum(
        len(page.get(NameObject("/Annots"), ArrayObject()).get_object())
        for page in reopened.pages
    )
    if widget_count != len(fields):
        raise RuntimeError(
            f"AcroForm widget mismatch: fields={len(fields)} widgets={widget_count}"
        )
    print(OUTPUT)
    print(
        f"pages={len(reopened.pages)} fields={len(fields)} widgets={widget_count}"
    )


if __name__ == "__main__":
    build_template()
