// Enables Hot Reloading
let express = require('express')
let detect = require('detect-port')
let http = require('http')

let sioApp = express()
let reload = true

let port = 5000

detect(port, (err, _port) => {
  if (err) {
    console.log(err)
    return
  }

  if (port === _port) {
    // Port is not occupied
    console.log('-------------->>>>>>>')
    console.log('Port 5000 is NOT occupied')
    let sioServer = http.createServer(sioApp).listen(5000)
    let sio = require('socket.io')(sioServer)

    sio.on('connection', (socket) => {
      if (reload) {
        // TODO: Change from setTimeout to detect 
        // TODO: Webpack finished build successfully
        setTimeout(() => socket.emit('message', 'reload'), 2000)
        reload = false
      }
    })
  } else {
    console.log('-------------->>>>>>>')
    console.log('Port 5000 is occupied')
    let sioServer = http.createServer(sioApp)
    let sio = require('socket.io')(sioServer)

    sio.on('connection', (socket) => {
      if (reload) {
        // TODO: Change from setTimeout to detect 
        // TODO: Webpack finished build successfully
        setTimeout(() => socket.emit('message', 'reload'), 2000)
        reload = false
      }
    })
  }
})