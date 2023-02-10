import { Router } from 'express'
import * as chatroomCtrl from '../controllers/chatroom.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.get('/', checkAuth, chatroomCtrl.index)
router.get('/:id', checkAuth, chatroomCtrl.show)
router.post('/', checkAuth, chatroomCtrl.create)
router.delete('/:id', checkAuth, chatroomCtrl.delete)
router.put('/:id/', checkAuth, chatroomCtrl.update)
router.put('/:id/join-chatroom', checkAuth, chatroomCtrl.joinChatroom)
router.put('/:id/leave-chatroom', checkAuth, chatroomCtrl.leaveChatroom)
router.put('/addmessage/:cid/:mid', checkAuth, chatroomCtrl.addMessage)

export { router }