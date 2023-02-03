import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'
import { Record } from '../models/record.js'
import { Chatroom } from '../models/chatroom.js'
import { Gameroom } from '../models/gameroom.js'
import { Message } from '../models/message.js'
import { Lobby } from '../models/lobby.js'

function showRecords(req, res) {
  Record.find({})
  .then(records => {
    res.status(200).json({ records })
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

function showUsers(req, res) {
  User.find({})
  .then(users => {
    res.status(200).json({ users})
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

function index(req, res) {
  res.status(200).json({text:"Hi I am lobby"})
  // Lobby.find({})
  // .populate('chatroom')
  // .populate('gameroom')
  // .populate('member')
  // .then(lobby => {
  //   res.status(200).json({lobby})
  // })
  // .catch(err => {
  //   res.status(500).json(err)
  // })
}

function showChatroom(req, res) {
  res.status(200).json({text:"Hi I am chatroom"})
}

export { 
  showUsers,
  showRecords,
  showChatroom,
  index,
}