import { Router } from 'express'
import * as lobbyCtrl from '../controllers/lobby.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, lobbyCtrl.create)
router.get('/', checkAuth, lobbyCtrl.index)
router.get('/:id', checkAuth, lobbyCtrl.show)
router.put('/:id/', checkAuth, lobbyCtrl.update)
router.delete('/:id', checkAuth, lobbyCtrl.delete)

export { router }