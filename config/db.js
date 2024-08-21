const mongoose = require("mongoose");
const DB_NAME = require("../constants");
require("dotenv").config();

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    console.log("MONGODB CONNECTED");
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED !!");

    process.exit(1);
  }
};

module.exports = connectDB;
