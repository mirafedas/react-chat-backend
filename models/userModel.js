const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
    unique: true
  },
  chats: {
    type: Array,
    required: [true, "A user must be connected to at least one chat"],
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
