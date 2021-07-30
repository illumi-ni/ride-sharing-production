// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/RideSharing', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });

const mongoose = require('mongoose');
const connection = "mongodb+srv://dbRIdeSharing:soft%401234@cluster0.wgflo.mongodb.net/test";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));