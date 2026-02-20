const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working from EC2!" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
