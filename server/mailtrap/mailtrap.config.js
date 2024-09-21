import Nodemailer from "nodemailer"
import { MailtrapTransport } from "mailtrap";

const TOKEN = "23c9f15537e5490032714f86eb7d6757";

export const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
  })
);

export const sender = {
  address: "hello@demomailtrap.com",
  name: "Max here",
};

// const recipients = [
//   "shoxie1999@gmail.com",
// ];

// transport
//   .sendMail({
//     from: sender,
//     to: recipients,
//     subject: "I sent you this",
//     text: "yo",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);