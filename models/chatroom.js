import mongoose from 'mongoose'

const Schema = mongoose.Schema

const chatroomSchema = new Schema({
  name: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  members: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
},{
  timestamps: true,
})

const Chatroom = mongoose.model('Chatroom', chatroomSchema)

export { Chatroom }
