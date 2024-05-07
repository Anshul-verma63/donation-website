import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/donation-app");
    console.log("db connected success");
  } catch (error) {
    console.log("Error while connecting database");
  }
};

export default dbConnection;
