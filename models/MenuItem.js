const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: String,
  image: String,
  category: String,
  price: Number,
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
