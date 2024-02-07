const { Schema, model } = require("mongoose");
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: string, required: true },
});
module.exports = new model("book", bookSchema);
