import { User } from '../models/user.js'
import { Record } from '../models/record.js'

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
    res.status(500).jason(err)
  })
}

export { 
  showUsers,
  showRecords,
}