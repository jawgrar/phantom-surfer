const nodemailer = require("nodemailer");

async function sendEmail(path) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // your SMTP username
      pass: process.env.PASS, // 'yxfawqlxvcanijyi' // your SMTP password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.EMAIL, // sender address
    to: process.env.EMAIL, // list of receivers
    cc: process.env.CCEMAIL || undefined, // list of receivers
    subject: "Dima wydad", // Subject line
    html: "<b>Wa9ila kina chi haja</b>", // html body
    attachments: [
      {
        filename: "screenshot.png",
        path: path,
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = sendEmail;
