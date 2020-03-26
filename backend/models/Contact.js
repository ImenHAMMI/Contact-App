const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Constschema = new schema({
  Name: { type: String, required: true },
  Mobile: { type: String, required: true },
  EMail: { type: String, required: true },
  Img: { type: String }
});

module.exports = Contact = mongoose.model("contact", Constschema);
