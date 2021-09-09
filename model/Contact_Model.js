const mongoose = require('mongoose');

const Contact = mongoose.model('Contact',{
    fullname:{
        type: String, 
        required: true  
    },
    email:{
        type: String,
          
    },
    subject:{
        type:String
    },
    message:{
        type:String,
        required:true
    }
});

module.exports = Contact;