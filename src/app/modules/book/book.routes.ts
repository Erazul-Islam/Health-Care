import express from 'express'
import { bookController } from './book.controller'

const router = express.Router()

router.post('/',bookController.createBookController)

export const bookRouter = router