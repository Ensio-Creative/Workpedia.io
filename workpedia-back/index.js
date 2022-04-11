const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const routes = require('./routes')

const app = express()

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' || 
    file.mimetype === 'image/jpg' || 
    file.mimetype === 'image/jpeg' || 
    file.mimetype === 'image/svg'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

app.use(bodyParser.json()) // application/json
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('images'))
app.use('/images', express.static(path.join(__dirname, 'images')))
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
  console.log(message)
  res.status(status).json({ message: message, data: data })
})

const connect = process.env.MONGODB_CONNECT
mongoose.connect(connect, {
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

