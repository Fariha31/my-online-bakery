const express = require("express");

var bodyParser = require("body-parser");
const connectDB = require("./database/db");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/authUser");
const authProduct = require("./routes/authProduct");
const authCategory = require("./routes/authCategory");
const app = express();

app.use(cors());
app.use(morgan("dev")); //management
app.use(express.json()); //incoming data in JSON

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/products", authProduct);
app.use("/api/category", authCategory);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Connected to port ${port}`));
