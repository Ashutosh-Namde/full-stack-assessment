const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://adminUser:1234567890@cluster0.ah0xuqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log("db connected");
    } catch (error) {
        console.log("error in db", error);
    }
};

module.exports = connectDB;
