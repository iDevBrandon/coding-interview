import mongoose from "mongoose";

const dotenv = require("dotenv");

dotenv.config();
const MONGO_URI =
  "mongodb+srv://admin:admin@cluster0.7cjcmd6.mongodb.net/nexttodo?retryWrites=true&w=majority";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);

    if (connection.readyState === 1) {
      console.log("Database connected!");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
