const { Schema, model } = require("mongoose");
const bookSchema = new Schema({
  title: String,
  author: String,
  content: String,
  createdat: { type: String, required: true },
  updateat: { type: String, required: true },
});
module.exports = new model("book", bookSchema);
