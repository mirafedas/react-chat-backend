const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  title: {
    type: String
  },
  messages: {
    type: Array
  }
})

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
