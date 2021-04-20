const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

const routes = require('./routes')

const app = express()

app.use(bodyParser.json()) // application/json
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})


// Port and Mongodb Connect
const port = 8000
app.use('/api', routes)

app.get('/', (req, res) => res.send('Welcome To Workpedia\'s API'))
app.use((error, req, res, next) => {
  const status = error.statusCode || 500
  const message = error.message
  const data = error.data
  res.status(status).json({ message: message, data: data })
})
// mongodb+srv://GreatAdams:Ifeanyichukwu7@workpedia.sknnk.mongodb.net/workpedia?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost/workpedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then((req, res) => {
    console.log('Mongodb Connected')
    const server = app.listen(port)
    const io = require('./utils/socket').init(server)
    io.on('connection', socket => {
      console.log('client connected')
    })
  })
  .catch(err => {
    console.log(err)
  })

