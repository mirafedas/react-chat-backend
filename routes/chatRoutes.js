const express = require('express');
const chatController = require('./../controllers/chatController');

const router = express.Router();

router.param('id', chatController.checkID);

router
  .route('/')
  .get(chatController.getAllChats)
  .post(chatController.checkBody, chatController.createChat);

router
  .route('/:id')
  .get(chatController.getChat)
  .patch(chatController.updateChat)
  .delete(chatController.deleteChat);

module.exports = router;
