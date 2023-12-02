const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'YourEmailService', // e.g., 'Gmail'
  auth: {
    user: 'yourEmail@example.com',
    pass: 'yourPassword'
  }
});

const mailOptions = {
  from: 'yourEmail@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});