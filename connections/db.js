// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb://127.0.0.1:27017/local_library";

const connection = async () => {
  return await mongoose.connect(mongoDB);
}


module.exports = connection;