


const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'infinity-machine@outlook.com',
        pass: process.env.MAIL_PASS
    }
});

  const mailOptions = {
    from: 'infinity-machine@outlook.com',
    to: 'ccarciofini@gmail.com',
    subject: 'SENDBOT REPORT',
    text: 'I SENT THIS EMAIL FROM THE CYBERSPHERE!!!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});