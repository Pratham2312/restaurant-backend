# 🍽️ Restaurant Menu Web App – Backend

This is the backend API for a restaurant menu ordering system. It supports order placement from both customer and captain, admin order tracking, and menu item seeding.

## 🌐 Live Deployment
👉 [Backend Live URL](https://restaurant-backend-ordb.onrender.com/api/menu)  
_(Replace with your actual Render URL if different)_

---

## ⚙️ Features

- 📦 RESTful API using Node.js + Express
- 🥗 GET /menu – Fetch menu items
- 🧾 POST /order – Place a new order (customer or captain)
- 🗂 Orders saved in MongoDB with table number, item list, and source
- 🧑‍🍳 Admin can view all orders and their status
- 🔃 Seed script to pre-populate menu items

---

## 🧩 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv (for environment variables)
- Render (for deployment)

---

## 🗃️ Folder Structure

restaurant-backend/
├── models/
│ ├── MenuItem.js
│ └── Order.js
├── routes/
│ ├── menu.js
│ └── order.js
├── .env
├── server.js
├── seed.js
├── package.json
└── README.md


---

## 🔌 .env Configuration

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
🚀 Getting Started (Local)
Install dependencies:


npm install
Start the server:


node server.js
Seed sample menu items into MongoDB:


node seed.js
📬 API Endpoints
Method	Route	Description
GET	/api/menu	Get all menu items
POST	/api/order	Submit a new order

📤 Sample Order Payload

{
  "tableNumber": "5",
  "items": [
    { "id": "menuitem_id", "name": "Paneer Tikka", "quantity": 2 }
  ],
  "source": "customer"  // or "captain"
}
🔧 Notes
Order model includes a source field to track who placed it: "captain" or "customer".

Menu item image field must exactly match the image name in frontend /public/images.