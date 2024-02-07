const { Schema, model } = require("mongoose");
const { objectId } = Schema.Types;
const bookSchema = new Schema({
  title: String,
  author: objectId,
  content: String,
  createdat: { type: String, required: true },
  updateat: { type: String, required: true },
});
module.exports = new model("book", bookSchema);
