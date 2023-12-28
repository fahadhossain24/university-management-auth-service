import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/user.route'

const app: Application = express()

// global middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application middleware
app.use('/api/v1/auth', userRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('server running')
})

export default app
