import fs from 'fs'
import path from 'path'
import express from 'express'
import cors from 'cors'

// Regular App
let app = express()

app.use(cors())

// Set EJS as templating engine
app.set('view engine', 'ejs')
app.set('views', './src/client/html')

// Returns data.json via HTTP Get Request
app.get('/data', (req, res) => {
  let filePath = path.join(__dirname, 'data.json')
  let data = fs.readFileSync(filePath, 'UTF-8')
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(JSON.parse(data)))
})

// Loads the main app
app.get('/', (req, res) => {
  res.render('index')
})

// Serve static files from dist
app.use(express.static('./dist'))

let server = app.listen(3000, () => {
  console.log('Listening on port 3000...')
})