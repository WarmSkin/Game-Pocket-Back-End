import { Gameroom } from "../models/gameroom.js"

function create(req, res) {
    req.body.host = req.user.profile
    req.body.players = [req.user.profile]
    // chatroom = new Chatroom()
    // req.body.chatroom = chatroom._id
    Gameroom.create(req.body)
    .then(gameroom => {
      res.status(201).json(gameroom)
    })
    .catch (error => {
      res.status(500).json(error)
    })
}

function index(req, res) {
  Gameroom.find({})
  .populate('players')
  .then(gamerooms => {
    res.status(200).json(gamerooms)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

function show(req, res) {
  Gameroom.findById(req.params.id)
  .populate('players')
  .populate('chatroom')
  .then(gameroom => {
    res.status(200).json(gameroom)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

function update(req, res) {
  Gameroom.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(gameroom => {
    res.status(200).json(gameroom)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

function deleteGameroom(req, res) {
  Gameroom.findByIdAndDelete(req.params.id)
  .then(gameroom => {
    res.status(200).json(gameroom)
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
  deleteGameroom as delete,
}