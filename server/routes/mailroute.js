require("dotenv").config();
const nodemailer = require('nodemailer')

module.exports = (app) =>
  app.post('/contact', async (req, res) => {
    let { text } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'infinity-machine@outlook.com',
            pass: process.env.MAIL_PASS
        }
    });

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  })