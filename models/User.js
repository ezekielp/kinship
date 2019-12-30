const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }},
  {
  timestamps: true
});

module.exports = User = mongoose.model("User", UserSchema);
