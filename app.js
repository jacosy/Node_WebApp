const express = require('express')
const morgan = require('morgan')
const path = require('path')
const defaultRouter = require('./routes/defaultRoute')

const app = express()
const router = express.Router();

app.set('views', path.resolve(__dirname, "views"))
app.set('view engine', 'ejs')

app.use(morgan('tiny'))
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')))

app.use('/default', defaultRouter)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(3000, () => {
  console.log(`WebApp is running, Listening port 3000`)
})