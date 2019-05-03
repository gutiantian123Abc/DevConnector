const mongoose = require('mongoose');
const keys = require('./keys');
const db = keys.mongoURI;

const connectDB = async () => {
    try{
        await mongoose.connect(db,
            {
                useNewUrlParser: true,
                useCreateIndex: true
            });
        console.log("Mongodb connected!");
    } catch(err){
        console.log(err.message);
        //Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;