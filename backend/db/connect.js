const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
function connectToDb() {
    const MONGO_URI = process.env.MONGO_URI;
    mongoose.connect(MONGO_URI).then(() => {
        console.log('Connected to the database');
    }).catch((error) => { 
        console.log(error);
    });
}
module.exports = connectToDb;