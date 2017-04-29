import fs from 'fs'
import path from 'path'
import express from 'express'

let app = express()

app.use(express.static('./dist'))

app.set('view engine', 'ejs')
app.set('views', './src/client/html')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/data', (req, res) => {
  let filePath = path.join(__dirname, 'data.json')
  let data = fs.readFileSync(filePath, 'UTF-8')
  res.send(JSON.parse(data))
})

let server = app.listen(3000, () => {
  console.log('Listening on port 3000...')
})