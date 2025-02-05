import {resend} from "@/lib/resend"
import VerificationEmail from "../../emails/VerficationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendverficationEmail(
    email: string,
    username:string,
    verifyCode:string,
): Promise<ApiResponse> {

    try {
        await resend.emails.send({
            from:"onboarding@resend.dev",
            to:email,
            subject:"Verification message | verfication code",
            react: VerificationEmail({username,otp:verifyCode})

        })
        return {success: true, message: "Verification email send successfully"}
        
    } catch (emailError) {
        console.error("Error sending verification email", emailError)
        return {success: false, message: "failed to send the verification email"}
    }
}