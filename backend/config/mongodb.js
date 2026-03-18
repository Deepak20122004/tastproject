import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to DB");
  });
await mongoose.connect(`${process.env.MONGOD_URL}/user-data`);
};

export default connectDB;