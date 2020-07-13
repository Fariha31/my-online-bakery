var mongoose = require("mongoose");
const connectDB = async () => {
  mongoose
    .connect("mongodb://localhost/Bakery", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to mongo"))
    .catch((error) => console.log("not connected"));
};

module.exports = connectDB;
