const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const nodemailer = require('nodemailer');

const sendMail = require('./utils').sendMail;

app.use(bodyParser.json({strict: false}));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/send_mail', function (req, response) {
    const EmailObj = {
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.text
    };

    sendMail(EmailObj, function(err, res) {
        if (err) {
            console.log(err);
            response.status(500).json({
                message: 'email send error!'
            })
        } else {
            response.status(200).json({
                message: 'email was sent'
            })
        }
    });

});

app.listen(3000);