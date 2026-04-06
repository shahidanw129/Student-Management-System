const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  course: String,
  age: Number
});

module.exports = mongoose.model("User", userSchema);