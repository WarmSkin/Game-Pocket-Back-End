import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/mypage', checkAuth, profilesCtrl.myPage)
router.get('/:id', checkAuth, profilesCtrl.show)
router.put('/:id', checkAuth, profilesCtrl.update)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)
router.put('/:id/send-friend-request', checkAuth, profilesCtrl.sendFriendRequest)
router.put('/:id/accept-friend-request', checkAuth, profilesCtrl.acceptFriendRequest)

export { router }
