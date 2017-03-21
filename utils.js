const nodemailer = require('nodemailer');
const config = require('./config');

const options = {
    host: config.smtp.host,
    port: config.smtp.port,
};

// EmailObject attr:
// {
//     to: 'Receiver email',
//     subject: 'Email subject',
//     text: 'Email text'
// }

module.exports.sendMail = (EmailObject, cb) => {
    const transporter = nodemailer.createTransport(options);
    EmailObject.from = config.smtp.email;

    return transporter.sendMail(EmailObject, cb);
};