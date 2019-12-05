const fs = require('fs');
const Chat = require('../models/chatModel');

exports.checkID = (req, res, next, val) => {
  console.log(`Chat id is: ${val}`);

  if (req.params.id * 1 > chats.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.title) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing title'
    });
  }
  next();
};

exports.getAllChats = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: chats.length,
    data: {
      chats
    }
  });
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

exports.createChat = (req, res) => {
  // console.log(req.body);

  const newId = products[chats.length - 1].id + 1;
  const newChat = Object.assign({ id: newId }, req.body);

  chats.push(newChat);

  fs.writeFile(
    `${__dirname}/data/chats.json`,
    JSON.stringify(chats),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          chat: newChat
        }
      });
    }
  );
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
