const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8000

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on port ${port}`))