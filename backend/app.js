import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import {errorHandler} from './middlewares/errorHandler.js'
import {NotFound} from './middlewares/notFound.js'
import booksRouter from './routes/booksRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/books', booksRouter)          

app.use(NotFound)
app.use(errorHandler)

export default app