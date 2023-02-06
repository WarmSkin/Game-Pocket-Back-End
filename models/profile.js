import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  mood: String,
  about: String,
  friendRequests: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
  record: [{ type: Schema.Types.ObjectId, ref: 'Record' }]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
