import mongoose from "mongoose"

const Schema = mongoose.Schema

const lobbySchema = new Schema({
  name: String,
  content: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  mainroom: { type: Schema.Types.ObjectId, ref: 'Chatroom' },
  gamerooms: [{ type: Schema.Types.ObjectId, ref: 'Gameroom'}],
  chatrooms: [{ type: Schema.Types.ObjectId, ref: 'Chatroom'}],
  members: [{ type: Schema.Types.ObjectId, ref: 'Profile'}]
}, {
  timestamps: true,
})

const Lobby = mongoose.model('Lobby', lobbySchema)

export { Lobby }