import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRotes } from './app/modules/user/user.routes'
import { adminRoutes } from './app/modules/admin/admin.routes'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/', (req: Request, res: Response) => {
    res.send({
        message : "Server is running"
    })
})

app.use('/api/v1/user',userRotes)
app.use('/api/v1/admin',adminRoutes)

export default app