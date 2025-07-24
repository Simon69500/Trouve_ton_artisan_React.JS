const nodemailer = require('nodemailer');

exports.sendMail = async ({nom, email, objet, message}) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: objet,
        text: `Nom: ${nom}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
};