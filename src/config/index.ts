require('dotenv').config()

export default {
  SERVER: {
    HOST: 'localhost',
    PORT: process.env.PORT || 1337 
  },
  DATABASE: {
    URL: 'mongodb://127.0.0.1:27017/social',
    OPTIONS: {
      useUnifiedTopology: true,
      wtimeoutMS: 50000,
      maxPoolSize: 50
    }
  },
  TOKEN: {
    LOGIN: 'IOLETEMPLANZA'
  }
}
