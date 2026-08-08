const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

exports.connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Database Connected"))
      .catch(() => console.log("Error while connecting database"));
  } catch (error) {
    console.log("error: ", error);
  }
};
