import { Message } from '../models/message.js'
import { Profile } from '../models/profile.js'

function create(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    req.body.from = profile.name
    req.body.sender = profile._id
    // add reciver later depends on the front end
    Message.create(req.body)
    .then(message => {
      res.status(201).json(message)
    })
    .catch (error => {
      res.status(500).json(error)
    })
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

function index(req, res) {
Message.find({})
.then(messages => {
  res.status(200).json(messages)
})
.catch (error => {
  res.status(500).json(error)
})
}

function show(req, res) {
Message.findById(req.params.id)
.populate('sender')
.populate('reciver')
.then(message => {
  res.status(200).json(message)
})
.catch (error => {
  res.status(500).json(error)
})
}

function update(req, res) {
Message.findByIdAndUpdate(req.params.id, req.body, {new: true})
.then(message => {
  res.status(200).json(message)
})
.catch (error => {
  res.status(500).json(error)
})
}

function deleteMessage(req, res) {
Message.findByIdAndDelete(req.params.id)
.then(message => {
  res.status(200).json(message)
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
deleteMessage as delete,
}