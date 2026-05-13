import { after, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { syncLeadToHubSpot } from "@/lib/hubspot/sync-lead";
import type { HubSpotLeadInput } from "@/lib/hubspot/types";

const recipientEmail = "ecorehomeconstructions@gmail.com";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

/** Προαιρετικά πεδία για HubSpot· η φόρμα δεν τα αλλάζει — μόνο server-side αν υπάρχουν στο JSON */
type IncomingBody = ContactPayload &
  Pick<HubSpotLeadInput, "area" | "service_type" | "budget" | "urgency">;

function validatePayload(payload: ContactPayload): string | null {
  const { name, email, phone, message } = payload;

  if (!name || !email || !phone || !message) {
    return "Παρακαλούμε συμπληρώστε όλα τα πεδία.";
  }

  if (!email.includes("@")) {
    return "Το email δεν είναι έγκυρο.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as IncomingBody;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    const payload = { name, email, phone, message };
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // Προεπιλογές Gmail — αρκεί να οριστεί SMTP_PASS στο .env.local (App Password)
    const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
    const port = process.env.SMTP_PORT ?? "587";
    const user = process.env.SMTP_USER ?? recipientEmail;
    const pass = process.env.SMTP_PASS;

    if (!pass?.trim()) {
      return NextResponse.json(
        {
          error:
            "Η αποστολή email δεν είναι ενεργή: λείπει το SMTP_PASS στο αρχείο .env.local. Δημιουργήστε App Password από τον λογαριασμό Google, προσθέστε SMTP_PASS=..., αποθηκεύστε και κάντε επανεκκίνηση του server (npm run dev).",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM?.trim() || user,
      to: recipientEmail,
      replyTo: email,
      subject: `Νέο αίτημα επικοινωνίας από ${name}`,
      text: [
        "Νέο μήνυμα από τη φόρμα επικοινωνίας Eco ReHome",
        "",
        `Όνομα: ${name}`,
        `Email: ${email}`,
        `Τηλέφωνο: ${phone}`,
        "",
        "Μήνυμα:",
        message,
      ].join("\n"),
    });

    const hubSpotLead: HubSpotLeadInput = {
      name,
      email,
      phone,
      message,
      area: typeof body.area === "string" ? body.area : undefined,
      service_type:
        typeof body.service_type === "string" ? body.service_type : undefined,
      budget: typeof body.budget === "string" ? body.budget : undefined,
      urgency: typeof body.urgency === "string" ? body.urgency : undefined,
    };

    after(() => syncLeadToHubSpot(hubSpotLead));

    return NextResponse.json(
      { success: "Το μήνυμά σας στάλθηκε με επιτυχία." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Παρουσιάστηκε σφάλμα κατά την αποστολή. Δοκιμάστε ξανά." },
      { status: 500 }
    );
  }
}
