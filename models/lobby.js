import mongoose from "mongoose"

const Schema = mongoose.Schema

const lobbySchema = new Schema({
  name: String,
  content: String,
  chatroom: { type: Schema.Types.ObjectId, ref: 'Chatroom' },
  gamerooms: [{ type: Schema.Types.ObjectId, ref: 'Gameroom'}],
  members: [{ type: Schema.Types.ObjectId, ref: 'Profile'}]
}, {
  timestamps: true,
})

const Lobby = mongoose.model('Lobby', lobbySchema)

export { Lobby }