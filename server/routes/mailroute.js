const mail_router = require('express').Router();
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
const nodemailer = require('nodemailer')

mail_router.post('/', async (req, res) => {
  console.log(req.body)
  const transporter = await nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.MAIL_SEND,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.MAIL_SEND,
    to: process.env.MAIL_RECEIVE,
    subject: `MAILBOT - from ${req.body.from} - MAILBOT`,
    text: req.body.message
};

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});




module.exports = mail_router;



// module.exports = (app) =>
//   app.post('/contact', async (req, res) => {
//     let { formInput } = req.body;
//     const { from, message } = req.body
//     console.log(req.body)
//     const transporter = nodemailer.createTransport({
//       service: 'hotmail',
//       auth: {
//         user: 'infinity-machine@outlook.com',
//         pass: process.env.MAIL_PASS
//       }
//     });

//     await transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log('Email sent: ' + info.response);
//       }
//     });
//   })
