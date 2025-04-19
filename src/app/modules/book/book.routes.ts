import express from 'express'
import { bookController } from './book.controller'

const router = express.Router()

router.post('/',bookController.createBookController)
router.get('/',bookController.getAllBooks)
router.get('/:id',bookController.getSingleBook)

export const bookRouter = router