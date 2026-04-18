const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = 3000;

// Get products
app.get("/products", (req, res) => {
    const data = fs.readFileSync("products.json");
    res.json(JSON.parse(data));
});

// Checkout (basic)
app.post("/checkout", (req, res) => {
    const order = req.body;
    console.log("Order received:", order);
    res.json({ message: "Order placed successfully!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
