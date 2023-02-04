import { Router } from 'express'
import * as gameroomCtrl from '../controllers/gameroom.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, gameroomCtrl.create)
router.get('/', checkAuth, gameroomCtrl.index)
router.get('/:id', checkAuth, gameroomCtrl.show)
router.put('/:id/', checkAuth, gameroomCtrl.update)
router.delete('/:id', checkAuth, gameroomCtrl.delete)

export { router }