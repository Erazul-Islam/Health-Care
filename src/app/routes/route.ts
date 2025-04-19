import express from 'express'
import { userRoutes } from '../modules/user/user.routes'
import { bookRouter } from '../modules/book/book.routes'

const router = express.Router()

const allRoutes = [
    {
        path : '/user',
        routes : userRoutes
    },
    {
        path : '/books',
        routes : bookRouter
    }
]

allRoutes.forEach((route) => router.use(route.path,route.routes))

export default router