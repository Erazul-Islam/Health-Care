import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes/route'
import gloablErrorhandler from './app/modules/middleware/globalErrorHandler'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(gloablErrorhandler)
app.get('/', (req: Request, res: Response) => {
    res.send({
        message: "Server is running"
    })
})

app.use('/api/v1', router)

export default app