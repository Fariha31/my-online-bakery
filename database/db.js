var mongoose = require("mongoose");
var config = require("config");
const connectDB = async () => {
  mongoose
    .connect(config.get("db"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to mongo"))
    .catch((error) => console.log("not connected"));
};

module.exports = connectDB;
