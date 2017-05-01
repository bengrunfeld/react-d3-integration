let socket = io('http://localhost:5000')

socket.on('disconnect', () => {
  console.log('SIO Disconnected')
})

socket.on('connect', () => {
  console.log('SIO Connected')
})

socket.on('message', (message) => {
  if (message === 'reload') {
    window.location.reload()
  }
})