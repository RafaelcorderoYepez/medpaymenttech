import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  practice: z.string().trim().min(1).max(200),
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(3).max(40),
  specialty: z.string().trim().min(1).max(100),
  software: z.string().trim().max(200).optional().default(""),
  needs: z.string().trim().max(3000).optional().default(""),
});

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((data) => schema.parse(data))
  .handler(async ({ data }) => {
    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
    await sendTemplateEmail("quote-request", "contact@medpaymenttech.com", {
      templateData: data,
      replyTo: data.email,
      idempotencyKey: `quote-request-${crypto.randomUUID()}`,
    });
    return { ok: true };
  });
