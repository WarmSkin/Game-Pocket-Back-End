import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'
import { Record } from '../models/record.js'
import { Lobby } from '../models/lobby.js'
import { Gameroom } from '../models/gameroom.js'
import { Message } from '../models/message.js'

function create(req, res) {
  Lobby.create(req.body)
  .then(lobby => {
    res.status(201).json(lobby)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

function index(req, res) {
Lobby.find({})
.then(lobbys => {
  res.status(200).json(lobbys)
})
.catch (error => {
  res.status(500).json(error)
})
}

function show(req, res) {
Lobby.findById(req.params.id)
.populate('mainroom')
.populate({path:"mainroom", populate: "messages"})
.populate('gamerooms')
.populate('members')
.then(lobby => {
  res.status(200).json(lobby)
})
.catch (error => {
  res.status(500).json(error)
})
}

function update(req, res) {
Lobby.findByIdAndUpdate(req.params.id, req.body, {new: true})
.then(lobby => {
  res.status(200).json(lobby)
})
.catch (error => {
  res.status(500).json(error)
})
}

function deleteLobby(req, res) {
Lobby.findByIdAndDelete(req.params.id)
.then(lobby => {
  res.status(200).json(lobby)
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
deleteLobby as delete,
}

//