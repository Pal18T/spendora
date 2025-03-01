
import { Resend } from "resend";
export async function sendEmail({
    to, 
    subject, 
    react
}) {
    const apiKey = process.env.RESEND_API_KEY || "";
    if (!apiKey) {
        console.error("RESEND_API_KEY is not set");
        return { success: false, error: "RESEND_API_KEY is not set" };
    }

    const resend = new Resend(apiKey); 

    try {
        const data = await resend.emails.send({
            from: "Finance App <onboarding@resend.dev>",
            to,
            subject,
            react,
        });
        return { success: true, data };
    } catch (error) {
        console.log("Error sending email", error);
        return { success: false, error };
    }
}

