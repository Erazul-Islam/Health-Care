import express from 'express'
import { adminController } from './admin.controller'
const router = express.Router()


router.get('/', adminController.getAdminFromDB )

export const adminRoutes = router
