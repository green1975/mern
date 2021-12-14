import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import { router } from './routes'

const connectionString = 'mongodb://localhost:27017/library'

const app = express()

app.use(bodyParser.json())

app.use(router)

mongoose.connect(connectionString)

app.listen(4000, () => console.info('Express server is running on port 4000'))