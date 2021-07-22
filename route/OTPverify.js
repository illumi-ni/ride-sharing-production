const nodemailer = require('nodemailer');

var otp, email;

//setting up the transport object
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'Gmail',

    auth: {
        user: 'initiators666@gmail.com',
        pass: 'soft@1234',
    }
});

module.exports.sendOTP = function (userEmail) {
    email = userEmail
    otp = parseInt(Math.random() * 1000000);

    try{
        var mailOptions = {
            to: email,
            subject: "Otp for email verification is: ",
            html: "<h3>OTP for email verification is </h3>" + "<h1 style='font-weight:bold;'>"
                + otp + "</h1>" // html body
        };
    
        var flag = true;
        var err = "";
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                err = error;
            } 
            flag = true;
            otp = otp;
        });
        return {success: flag, error: err, otp1: otp };
    }
    catch(error) {
        throw error;
    }
};

module.exports.verifyOTP = function (nOtp) {
    try{
        var flag = false;

        if(nOtp == otp) {
            flag = true;
        }
        return { success: flag, email1: email }
    }
    catch(error) {
        throw error;
    }
};