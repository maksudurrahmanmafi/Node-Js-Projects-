const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 1001;

// Middleware
app.use(cors());
app.use(express.json());

// Initial Data
const users = [
  { id: 1, name: "Mafi", email: "m@gmail.com" },
  { id: 2, name: "Mafi", email: "m@gmail.com" },
  { id: 3, name: "Mafi", email: "m@gmail.com" },
];

// Routes
app.get("/", (req, res) => {
  res.send("Hello I am Node Js");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Post method called:", req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Express running on port: ${port}`);
});