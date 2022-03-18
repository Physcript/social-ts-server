import { Server } from 'socket.io'

module.exports = ( httpServer: any ) => {
  
  const io = new Server(httpServer, { cors: { origin: 'http://localhost:1337' } })

  io.on('connected' , (socket) => {
    console.log('connected')
  })

  return
}

