import { Record } from "../models/record.js"

function create(req, res) {
    Record.create(req.body)
    .then(record => {
      res.status(201).json(record)
    })
    .catch (error => {
      res.status(500).json(error)
    })
}

function index(req, res) {
  Record.find({})
  .then(records => {
    res.status(200).json(records)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

function show(req, res) {
  Record.findById(req.params.id)
  .then(record => {
    res.status(200).json(record)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

function update(req, res) {
  Record.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(record => {
    res.status(200).json(record)
  })
  .catch (error => {
    res.status(500).json(error)
  })
}

function deleteRecord(req, res) {
  Record.findByIdAndDelete(req.params.id)
  .then(record => {
    res.status(200).json(record)
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
  deleteRecord as delete,
}