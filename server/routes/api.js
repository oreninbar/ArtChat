const express = require("express");
const router = express.Router();
const User = require("../../model/User");
const Message = require("../../model/Message");
const Chat = require("../../model/Chat");

router.get("/getChats", async (req, res) => {
  try {
    const chat = await Chat.find({}).populate("user");
    if (chat) res.send(chat);
    else
      res.status(404).send({
        message:
          "somthing went wrong,  server can't find the requested resource ",
      });
  } catch (err) {
    res.status(500).send({ message: "somthing went wrong", error: `${err}` });
  } finally {
    res.end();
  }
});

router.get("/getChat", async (req, res) => {
  const chatId = req.body
  try {
    const chat = await Chat.find(chatId);
    if (chat) res.send(chat);
    else
      res.status(404).send({
        message:
          "somthing went wrong,  server can't find the requested resource ",
      });
  } catch (err) {
    res.status(500).send({ message: "somthing went wrong", error: `${err}` });
  } finally {
    res.end();
  }
});

router.get("/getUsers", async (req, res) => {
  try {
    const allUsers = await User.find({}).populate("chat");
    if (allUsers) res.send(allUsers);
    else
      res.status(404).send({
        message:
          "somthing went wrong,  server can't find the requested resource ",
      });
  } catch (err) {
    res.status(500).send({ message: "somthing went wrong", error: `${err}` });
  } finally {
    res.end();
  }
});

router.get("/getUser", async (req, res) => {
  try {
    const userId = req.body;
    const user = await User.find(userId).populate("chat");
    if (user) res.send(user);
    else
      res.status(404).send({
        message:
          "somthing went wrong,  server can't find the requested resource ",
      });
  } catch (err) {
    res.status(500).send({ message: "somthing went wrong", error: `${err}` });
  } finally {
    res.end();
  }
});

router.get("/getChatMessages", async (req, res) => {
  const chatId = req.body;
  try {
    const chat = await Chat.find(chatId);
    if (chat) res.send(chat[0].messages);
    else
      res.status(404).send({
        message:
          "somthing went wrong,  server can't find the requested resource ",
      });
  } catch (err) {
    res.status(500).send({ message: "somthing went wrong", error: `${err}` });
  } finally {
    res.end();
  }
});

router.get("/getUserMessages", async (req, res) => {
  const userId = req.body;
  try {
    const user = await User.find(userId).populate('chat');
    if (user) {
      res.send(user[0].chat.messages);
    } else
      res.status(404).send({
        message:
          "somthing went wrong,  server can't find the requested resource ",
      });
  } catch (err) {
    res.status(500).send({ message: "somthing went wrong", error: `${err}` });
  } finally {
    res.end();
  }
});

router.put("/addMessage", async (req, res) => {
  const {chatId, message} = {...req.body};
  try {
    const chat = await Chat.find({chatId});
    console.log(chat[0].messages);
    if (chat) {
      chat[0].messages.push(message);
      chat[0].save()
    }
    else
      res.status(404).send({
        message:
          "somthing went wrong,  server can't find the requested resource ",
      });
  } catch (err) {
    res.status(500).send({ message: "somthing went wrong", error: `${err}` });
  } finally {
    res.end();
  }
});

router.post("/createChat", async (req, res) => {
  try {
    const user = new User({
      userId: `${Math.round(Math.random() * 10000)}`,
      messages: [],
    });
    const chat = new Chat({
      chatId: `${Math.round(Math.random() * 10000)}`,
      user: user,
      messages: [],
    });
    user.chat = chat;
    await user.save();
    await chat.save();
    res.status(200).send(chat.chatId);
  } catch (err) {
    res.status(500).send({ message: "somthing went wrong", error: `${err}` });
  } finally {
    res.end();
  }
});

router.delete("/deleteAll", async (req, res) => {
  try {
    await Chat.deleteMany();
    await User.deleteMany();
  } catch (err) {
    res.status(500).send({ message: "somthing went wrong", error: `${err}` });
  } finally {
    res.end();
  }
});

module.exports = router;
