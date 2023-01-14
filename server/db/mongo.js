import mongoose from "mongoose";

import MONGO_URL from process.env.MONGO_URL;
const mongoConnect = async () => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo db is connected");
  } catch (e) {
    console.log(e);
  }
}

module.exports = mongoConnect;
