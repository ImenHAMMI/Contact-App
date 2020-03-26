const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      config.get("MONGO_URI"),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      err => (err ? console.error(err) : console.log("mongoose connected"))
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
