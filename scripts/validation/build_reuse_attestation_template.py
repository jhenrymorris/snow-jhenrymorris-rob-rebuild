from pathlib import Path

from reportlab.lib.pagesizes import LETTER
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "docs" / "source-forms" / "ROB-Reuse-Supervisor-Attestation.pdf"


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=LETTER)
    width, height = LETTER
    form = pdf.acroForm

    pdf.setTitle("ROB Reuse Supervisor Attestation")
    pdf.setFont("Helvetica-Bold", 16)
    pdf.drawString(54, height - 66, "ROB Reuse Supervisor Attestation")

    pdf.setFont("Helvetica", 10)
    text = pdf.beginText(54, height - 98)
    text.setLeading(15)
    text.textLine("This is a request-level supervisory attestation against an existing Active")
    text.textLine("ROB Authorization Form. It does not create or replace Form 1768.")
    pdf.drawText(text)

    fields = [
        ("HR Case Number", "HR Case Number", height - 160),
        ("Authorization Number", "Authorization Number", height - 204),
        ("Supervisor", "Supervisor", height - 248),
        ("Decision Type", "Supervisor Authorization Decision", height - 292),
    ]
    for field_name, label, y in fields:
        pdf.setFont("Helvetica-Bold", 9)
        pdf.drawString(54, y + 15, label)
        form.textfield(
            name=field_name,
            x=54,
            y=y - 2,
            width=504,
            height=18,
            borderWidth=1,
            borderColor=None,
            fillColor=None,
            textColor=None,
            forceBorder=True,
        )

    pdf.setFont("Helvetica", 10)
    attestation = pdf.beginText(54, height - 355)
    attestation.setLeading(15)
    attestation.textLine("By approving and signing, I attest that the requested access remains fully")
    attestation.textLine("covered by the referenced Active authorization for the identified employee.")
    pdf.drawText(attestation)

    pdf.setFont("Helvetica-Bold", 9)
    pdf.drawString(54, height - 420, "Supervisor Signature")
    pdf.rect(54, height - 500, 504, 68, stroke=1, fill=0)
    pdf.setFont("Helvetica-Oblique", 8)
    pdf.drawString(62, height - 493, "Native ServiceNow Sign block")

    pdf.setFont("Helvetica", 8)
    pdf.drawString(
        54,
        44,
        "Native signing task/execution is authoritative evidence. No new governed Form 1768 is created.",
    )

    pdf.showPage()
    pdf.save()


if __name__ == "__main__":
    main()
