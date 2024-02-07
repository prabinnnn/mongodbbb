const { Schema, model } = require("mongoose");
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  createdat: { type: String, required: true },
  updateat: { type: String, required: true },
});
module.exports = new model("book", bookSchema);
