import mongoose from "mongoose";
const config = useRuntimeConfig();
export default async () => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo db is connected");
  } catch (e) {
    console.log(e);
  }
};
