import { Chatroom } from "../models/chatroom.js"

function create(req, res) {
    req.body.owner = req.user.profile
    req.body.members = [req.user.profile]
    Chatroom.create(req.body)
    .then(chatroom => {
      chatroom.populate('members')
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

function update(req, res) {
  Chatroom.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(chatroom => {
    res.status(200).json(chatroom)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

function deleteChatroom(req, res) {
  Chatroom.findByIdAndDelete(req.params.id)
  .then(chatroom => {
    res.status(200).json(chatroom)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

function addMessage(req, res) {
  Chatroom.findByIdAndUpdate(
    {_id: req.params.cid},
    {$push: {messages: req.params.mid}},
    {new: true}
  )
  .then(chatroom => {
    res.status(200).json(chatroom)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

function joinChatroom(req, res) {
  Chatroom.findByIdAndUpdate(
    {_id: req.params.id},
    {$push: {members: req.user.profile}},
    {new: true}
  )
  .then(chatroom => {
    res.status(200).json(chatroom)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

function leaveChatroom(req, res) {
  Chatroom.findByIdAndUpdate(
    {_id: req.params.id},
    {$pull: {members: req.user.profile}},
    {new: true}
  )
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
  addMessage,
  joinChatroom,
  leaveChatroom,
}