import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()
const port = 4000

// global middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: any) => {
  res.send('server running')
})

export default app
