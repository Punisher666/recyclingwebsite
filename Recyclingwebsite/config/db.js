const mongoose = require('mongoose');
//const config = require('../config');
const db = 'mongodb+srv://admin:Kshitiz123@cluster0.rzhgq.mongodb.net/Database1?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(db, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log("Database connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = connectDB;