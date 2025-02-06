"use server";
import { Resend } from "resend";
export async function sendEmail({
    to, 
    subject, 
    react
}) {
    const resend = new Resend(process.env.RESEND_API_KEY || ""); 

    try {
        const data = await resend.emails.send({
            from: "Finance App <onboarding@resend.dev",
            to : "voyager4623@gmail.com",
            subject,
            react,
        });
        return { success: true, data };
    } catch (error) {
        console.log("Error sending email", error);
        return { success: false, error };
    }
}