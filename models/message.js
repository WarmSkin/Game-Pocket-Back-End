import mongoose from 'mongoose'

const Schema = mongoose.Schema

const messageSchema = new Schema({
  content: String,
  from: String,
  to: String,
  sender: { type: Schema.Types.ObjectId, ref: 'Profile' },
  reciver: { type: Schema.Types.ObjectId, ref: 'Profile' },
},{
  timestamps: true,
})

const Message = mongoose.model('Message', messageSchema)

export { Message }