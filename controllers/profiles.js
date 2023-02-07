import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addPhoto(req, res) {
  const imageFile = req.files.photo.path
  Profile.findById(req.params.id)
  .then(profile => {
    cloudinary.uploader.upload(imageFile, {tags: `${req.user.email}`})
    .then(image => {
      profile.photo = image.url
      profile.save()
      .then(profile => {
        res.status(201).json(profile.photo)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  })
}

function update(req, res) {
  Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(profile => {
    res.status(200).json(profile)
  })
  .catch(error => {
    res.status(500).json(error)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.status(200).json(profile)
  })
  .catch(error => {
    res.status(500).json(error)
  })
}

function myPage(req, res) {
  Profile.findById(req.user.profile)
  .populate('friendRequests')
  .populate('friends')
  .populate('records')
  .then(profile => {
    res.status(200).json(profile)
  })
  .catch(error => {
    res.status(500).json(error)
  })
}

function sendFriendRequest(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    profile.friendRequests.push(req.user.profile)
    profile.save()
    res.status(200).json(profile)
  })
  .catch(error => {
    res.status(500).json(error)
  })
}

function acceptFriendRequest(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    profile.friends.push(req.user.profile)
    profile.save()
    Profile.findOneAndUpdate(
      req.user.profile,
      {
        $pull: {friendRequests: profile._id},
        $push: {friends: profile._id}
      },
      {new: true}
    )
    .then(newProfile => {
      res.status(200).json(newProfile)
    })
    .catch(error => {
      res.status(500).json(error)
    })
  })
  .catch(error => {
    res.status(500).json(error)
  })
}

export { 
  index,
  addPhoto,
  update,
  show,
  myPage,
  sendFriendRequest,
  acceptFriendRequest,
 }
