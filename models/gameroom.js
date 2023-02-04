import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gameroomSchema = new Schema({
  name: String,
  type: String,
  password: String,
  host: { type: Schema.Types.ObjectId, ref: 'Profile' },
  players: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
  chatroom: { type: Schema.Types.ObjectId, ref: 'Chatroom' },
},{
  timestamps: true,
})

const Gameroom = mongoose.model('Gameroom',gameroomSchema)

export { Gameroom }