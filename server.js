const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const connectDB = require("./database/db");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/authUser");
const authProduct = require("./routes/authProduct");
//app.use(bodyParser.json({ limit: "50mb" }));
//app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(morgan("dev")); //management
app.use(express.json()); //incoming data in JSON

connectDB();
app.get("/", (req, res) => {
  res.send("inside server");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", authProduct);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Connected to port ${port}`));
