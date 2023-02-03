import mongoose from 'mongoose'

const Schema = mongoose.Schema

const recordSchema = new Schema({
  owner: String,
  game: String,
  win: Number,
  loss: Number,
  tie: Number,
  score: Number,
},{
  timestamps: true,
})

const Record = mongoose.model('Record',recordSchema)

export { Record }