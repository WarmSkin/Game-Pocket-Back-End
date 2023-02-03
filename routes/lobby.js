import { Router } from 'express'
import * as lobbyCtrl from '../controllers/lobby.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========
router.get('/', lobbyCtrl.index)
router.get('/chatroom', lobbyCtrl.showChatroom)
router.get('/users', lobbyCtrl.showUsers)
router.get('/records', lobbyCtrl.showRecords)

// ========= Protected Routes ========= 

export { router }