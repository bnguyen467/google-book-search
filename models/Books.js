const { model, Schema } = require("mongoose");

const Book = new Schema({
  authors: String,
  description: String,
  image: String,
  link: String,
  title: String,
});

module.exports = model("Book", Book);
