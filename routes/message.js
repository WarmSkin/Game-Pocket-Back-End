import { Router } from 'express'
import * as messageCtrl from '../controllers/message.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, messageCtrl.create)
router.get('/', checkAuth, messageCtrl.index)
router.get('/:id', checkAuth, messageCtrl.show)
router.put('/:id/', checkAuth, messageCtrl.update)
router.delete('/:id', checkAuth, messageCtrl.delete)

export { router }