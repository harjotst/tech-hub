import mongoose from "mongoose";

const databaseConnect = async function (uri) {
  console.log(uri);
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error);
  }
};

databaseConnect();

export default databaseConnect;
