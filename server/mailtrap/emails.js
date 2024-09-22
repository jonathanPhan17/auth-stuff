import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { sender, transport } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = email

    try {
        const response = await transport.sendMail({
            from: sender,
            to: recipient,
            subject: "Verify Your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })

        console.log("Verification Email sent succesfully", response)
    } catch (error) {
        console.error(`Error sending verification email: ${error}`);
        throw new Error(`Error sending verification email: ${error}`)
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = email;

    try {
      const response = await transport.sendMail({
        from: sender,
        to: recipient,
        subject: "Welcome Email",
        html: WELCOME_EMAIL_TEMPLATE,
        category: "Welcome Email"
      });

      console.log("Welcome Email sent succesfully", response)
    } catch (error) {
      console.error(`Error sending welcome email: ${error}`);
      throw new Error(`Error sending welcome email: ${error}`);
    }
};
