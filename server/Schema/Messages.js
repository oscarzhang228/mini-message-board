const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  header: String,
  message: String,
  name: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("Messages", messageSchema);
