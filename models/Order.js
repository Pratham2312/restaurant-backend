const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  tableNumber: {
    type: String,
    required: true,
  },
  items: [
    {
      id: String,
      name: String,
      quantity: Number,
    }
  ],
  status: {
    type: String,
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
   source: { type: String, enum: ["customer", "captain"], default: "captain" }

});

module.exports = mongoose.model("Order", orderSchema);

