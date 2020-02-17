var nodemailer = require("nodemailer");

export async function sendEmail() {
  let result = "";
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "hughpaul10@yahoo.co.uk", // generated ethereal user
      pass: "5n/Les-FBN^$F3y" // generated ethereal password
    }
  });

  // setup e-mail data with unicode symbols
  const mailOptions = {
    from: '"Hugh Paul" <hughpaul10@yahoo.co.uk>', // sender address
    to: "hughpaul14@gmail.com, hughpaul16@hotmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ?", // plaintext body
    html: "<b>Hello world ?</b>" // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    console.log("here");
    if (error) {
      result = error;
      return console.log(error);
    }
    console.log(info, "info");
    result = "Message sent: " + info.response;
    console.log("Message sent: " + info.response);
    return result;
  });
}

// export default { main };
