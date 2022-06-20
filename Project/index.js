const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const mysql = require('mysql')

// require("./routes/users");

const app = express();
const port = process.env.port || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const users_routes = require("./routes/user");

const { db } = require("./config/db.config");



app.use("/users", users_routes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to admin panel" });
});

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});