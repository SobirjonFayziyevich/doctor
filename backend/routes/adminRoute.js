import express from 'express'
import { addDoctor } from '../controllers/adminController.js'
import upload from '../middlewars/multer.js'

const router = express.Router()

router.post('/add-doctor',upload.single('image'),addDoctor) // bittagina rasm yuqlaydi.

export default router 