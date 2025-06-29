const mongoose = require("mongoose");
require("dotenv").config();
const MenuItem = require("./models/MenuItem");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("Seeding database...");

  await MenuItem.deleteMany(); // Clear existing data

  await MenuItem.insertMany([
    {
      name: "Margherita Pizza",
      image: "https://via.placeholder.com/300x200.png?text=Pizza",
      category: "Main Course",
      price: 299,
    },
    {
      name: "Paneer Tikka",
      image: "https://via.placeholder.com/300x200.png?text=Paneer+Tikka",
      category: "Starter",
      price: 199,
    },
    {
      name: "Butter Naan",
      image: "https://via.placeholder.com/300x200.png?text=Naan",
      category: "Bread",
      price: 49,
    },
    {
      name: "Veg Biryani",
      image: "https://via.placeholder.com/300x200.png?text=Veg+Biryani",
      category: "Main Course",
      price: 249,
    },
    {
      name: "Chocolate Brownie",
      image: "https://via.placeholder.com/300x200.png?text=Brownie",
      category: "Dessert",
      price: 99,
    },
  ]);

  console.log("Done seeding!");
  process.exit();
});
