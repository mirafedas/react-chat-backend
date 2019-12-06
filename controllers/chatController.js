const Chat = require('../models/chatModel');

exports.getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find();
    // console.log(chats)

    res.status(200).json({
      status: 'success',
      results: chats.length,
      data: {
        chats
      }
    });
  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getChat = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const chat = chats.find(el => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      chat
    }
  });
};

exports.createChat = async (req, res) => {
  try {
    const newChat = await Chat.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        chat: newChat
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err
    });
  }
};

exports.updateChat = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      chat: '<Updated chat here...>'
    }
  });
};

exports.deleteChat = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
