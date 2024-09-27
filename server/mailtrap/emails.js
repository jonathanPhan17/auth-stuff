import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplates.js"
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
        throw new Error(`Error sending verification email: ${error}`);
    }
}

export const sendWelcomeEmail = async (email) => {
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

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = email;
  

  try {
    const response = await transport.sendMail({
      from: sender,
      to: recipient,
      subject: "Reset Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Reset Password"
    });

    console.log("Password reset email sent successfully", response)
  } catch (error) {
    console.error(`Error sending reset password: ${error}`);
    throw new Error(`Error sending reset password: ${error}`);
  }
}

export const sendResetSuccessEmail = async (email) => {
  const recipient = email;

  try {
    const response = await transport.sendMail({
      from: sender,
      to: recipient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset Success"
    });

    console.log("Password reset success email sent successfully", response);
  } catch (error) {
    throw new Error(`Error sending password reset success email: ${error}`);
  }
}