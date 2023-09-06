const nodemailer = require("nodemailer");
const { USER_EMAIL, PASSWORD_EMAIL, EMAIL_PORT, EMAIL_HOST } = process.env;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  //   port: 465,
  port: EMAIL_PORT,
  //   secure: true, // true for 465, false for other ports
  auth: {
    user: USER_EMAIL, // generated ethereal user
    pass: PASSWORD_EMAIL, // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log("ready for sending emails");
});

module.exports = transporter;
