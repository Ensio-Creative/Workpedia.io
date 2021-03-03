const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth')

const app = express()

app.use(bodyParser.json()) // application/json
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
app.use('/auth', authRoutes )

app.get('/', (req, res) => res.send('Welcome To Workpedia\'s API'))

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(`mongodb://mongo/workpedia`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
} else {
  mongoose.connect('mongodb://localhost/workpedia', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then((req, res) => {
    console.log('Mongodb Connected')
    app.listen(port, () => console.log(`App listening on port ${port}`))
  })
  .catch(err => {
    console.log(err)
  })
}
