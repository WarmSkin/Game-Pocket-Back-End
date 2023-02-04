import { Message } from "../models/message.js"
import { Chatroom } from "../models/chatroom.js"

function create(req, res) {
    req.body.owner = req.user.profile
    req.body.members = [req.user.profile]
    Chatroom.create(req.body)
    .then(chatroom => {
      res.status(201).json(chatroom)
    })
    .catch (error => {
      res.status(500).json(error)
    })
}

function index(req, res) {
  Chatroom.find({})
  .populate('members')
  .then(chatrooms => {
    res.status(200).json(chatrooms)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

function show(req, res) {
  Chatroom.findById(req.params.id)
  .populate('members')
  .populate('messages')
  .then(chatroom => {
    res.status(200).json(chatroom)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

const update = async (req, res) => {
  Chatroom.findByIdAndUpdate(req.params.id, req.body)
  .then(chatroom => {
    res.status(200).json(chatroom)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

const deleteChatroom = async (req, res) => {
  Chatroom.findByIdAndDelete(req.params.id)
  .then(chatroom => {
    res.status(200).json(chatroom)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

export {
  create,
  index,
  show,
  update,
  deleteChatroom as delete,
}