const nodemailer = require('nodemailer');
const AWS = require("aws-sdk");

exports.sendMail = async (options) => {
  
  AWS.config.update({
    accessKeyId: 'AKIA4U4ASPCNJNPCO7FK',
    secretAccessKey: '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',
    region: 'us-east-2'
  });

  const ses = new AWS.SES({ apiVersion: "2010-12-01" });
  const params = {
      Destination: {
        ToAddresses: [options.to] // Email address/addresses that you want to send your email
      },
      ConfigurationSetName: '',
      Message: {
        Body: {
          Html: {
            // HTML Format of the email
            Charset: "UTF-8",
            Data: options.body
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: options.subject
        }
      },
      Source: "durankaranaweera@gmail.com"
  };

const sendEmail = ses.sendEmail(params).promise();

sendEmail
  .then(data => {
    console.log("email submitted to SES", data);
  })
  .catch(error => {
    console.log(error);
  });
    /*const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'durankaranaweera@gmail.com',
            pass: 'dur$181@sri92birlan'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailConfig = {
        from: options.from,
        to: options.to,
        subject: options.subject,
        html: options.body
    }

    await transporter.sendMail(mailConfig, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });*/
}
 