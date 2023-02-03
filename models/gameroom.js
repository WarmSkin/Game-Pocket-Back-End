import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gameroomSchema = new Schema({
  name: String,
  type: String,
  host: { type: Schema.Types.ObjectId, ref: 'Profile' },
  players: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
  password: String,
  chatroom: { type: Schema.Types.ObjectId, ref: 'Chatroom' },
},{
  timestamps: true,
})

const Gameroom = mongoose.model('Gameroom',gameroomSchema)

export { Gameroom }