import { Server } from 'socket.io'

module.exports = ( httpServer: any ) => {
  
  const io = new Server(httpServer, { cors: { origin: 'http://localhost:3000' } })

  io.on('connection' , (socket) => {
    console.log('connected')

    socket.on('refresh-post', () => {
      io.emit('refresh-post') 
    })

    socket.on('like-notif', (data) => {
      io.emit('like-notif', { data })
    })

  })

}

