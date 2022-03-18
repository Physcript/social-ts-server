import config from './config'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

import { createServer } from 'http'
import { Server } from 'socket.io'

// const variable
const app = express()
const httpServer = createServer(app)
const corsOption = { origin: 'http://localhost:3000', credentials: true }

// use
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors(corsOption))

// cors
require('./config/config_cors')(app)
// middleware
require('./config/config_middleware')(app)
// io
require('./config/config_io')(httpServer)
// routes
require('./config/config_route')(app)

// initialze
mongoose
  .connect(`${ config.DATABASE.URL }`)
  .then(() => console.log('DATABASE CONNECTED'))
  .catch((Err) => console.log(`Error, ${ Err }`))

httpServer.listen(config.SERVER.PORT, () => {
  console.log(`SERVER: ${ config.SERVER.PORT }`)
})
