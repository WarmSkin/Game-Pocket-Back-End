import { Router } from 'express'
import * as recordCtrl from '../controllers/record.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.get('/', checkAuth, recordCtrl.index)
router.get('/:id', checkAuth, recordCtrl.show)
router.post('/', checkAuth, recordCtrl.create)
router.put('/:id/', checkAuth, recordCtrl.update)
router.delete('/:id', checkAuth, recordCtrl.delete)

export { router }