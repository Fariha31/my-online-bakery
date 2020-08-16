const express = require("express");
const morgan = require("morgan");
const connectDB = require("./database/db");
const cors = require("cors");
const authRoutes = require("./routes/authUser");
const authProduct = require("./routes/authProduct");
const authCategory = require("./routes/authCategory");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
app.use(morgan("dev")); //management
app.use(express.json()); //incoming data in JSON
//connectDB();
require("dotenv").config();
app.use(cors());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo Connected");
});
app.use("/api/auth", authRoutes);
app.use("/api/products", authProduct);
app.use("/api/category", authCategory);
if (process.env.NODE_ENV === "production") {
  // Serve static files from the React frontend app
  app.use(express.static(path.join(__dirname, "client/build")));
  // Anything that doesn't match the above, send back index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Connected to port ${port}`));
