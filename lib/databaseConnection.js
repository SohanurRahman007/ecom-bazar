import mongoose from "mongoose";
const mongodb_uri = process.env.MONGODB_URI;

let cashed = global.mongoose;

if (!cashed) {
  cashed = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectDB = async () => {
  if (cashed.conn) return cashed.conn;

  // checking the database connection
  if (!cashed.promise) {
    cashed.promise = mongoose.connect(mongodb_uri, {
      dbName: "nextjs-ecom-bazar",
      bufferCommands: false,
    });
  }

  cashed.conn = await cashed.promise;
  return cashed.conn;
};
