import { Router } from 'express'
import * as lobbyCtrl from '../controllers/lobby.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.get('/', checkAuth, lobbyCtrl.index)
router.get('/:id', checkAuth, lobbyCtrl.show)
router.post('/', checkAuth, lobbyCtrl.create)
router.put('/:id', checkAuth, lobbyCtrl.update)
router.put('/:id/join-lobby', checkAuth, lobbyCtrl.joinLobby)
router.put('/:id/leave-lobby', checkAuth, lobbyCtrl.leaveLobby)
router.put('/:lid/:cid/add-chatroom', lobbyCtrl.addChatroom)
router.delete('/:id', checkAuth, lobbyCtrl.delete)

export { router }