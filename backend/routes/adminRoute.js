import express from 'express'
import { addDoctor, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewars/multer.js'
import authAdmin from '../middlewars/authAdmin.js'

const router = express.Router()

router.post('/add-doctor',authAdmin, upload.single('image'),addDoctor) // bittagina rasm yuqlaydi.
router.post('/login',loginAdmin)

export default router 