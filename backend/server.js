const express = require('express')
const path = require('path')
const mysql = require('mysql')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
app.use(morgan('dev'))

//CORS Middleware
app.use(function (req, res, next) {
  //Enabling CORS
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization'
  )
  next()
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

const getConnection = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'rnDB',
  })
}

const executeQuery = (res, query, queryArr) => {
  getConnection().query(query, queryArr, (err, rows, field) => {
    if (err) {
      console.log('ERROR: ', err)
      // res.statusMessage = err
      res.status(500).send(err)
      // res.status(500).end()
    } else {
      res.status(200).send(rows)
    }
  })
}

// --------- GET ---------

app.get('/ads', (req, res) => {
  const query = 'SELECT * FROM ads'
  executeQuery(res, query, null)
})

app.get('/ads/:user_id', (req, res) => {
  const { user_id } = req.params

  const query =
    'SELECT * ' +
    'FROM ads ' +
    'WHERE ' +
    'user_id=' + user_id

  executeQuery(res, query, null)
})

// --------- POST ---------

app.post('/post_ad', (req, res) => {
  const { ad_title, ad_description, ad_date, ad_time, ad_price, ad_imageUri, user_id, ad_schedule } = req.body

  const query =
    'INSERT INTO ads ( ad_title, ad_description, ad_date, ad_time, ad_price, ad_imageUri, user_id, ad_schedule) ' +
    'VALUES (?, ?, ?, ?, ?, ?, ?, ?)'

  const queryArr = [ad_title, ad_description, ad_date, ad_time, ad_price, ad_imageUri, user_id, ad_schedule]

  executeQuery(res, query, queryArr)
})

app.post('/post_user', (req, res) => {
  const { user_id, user_full_name } = req.body

  const query =
    'INSERT INTO users (user_id, user_full_name) ' +
    'VALUES (?, ?)'

  const queryArr = [user_id, user_full_name]

  executeQuery(res, query, queryArr)
})

// --------- DELETE ---------

app.post('/delete_ad', (req, res) => {
  const { ad_id } = req.body

  const query =
    'DELETE FROM ads' +
    ' WHERE ad_id=' + ad_id

  executeQuery(res, query, null)
})

// --------- UPDATE ---------

app.post('/update_ad', (req, res) => {
  const { ad_id, ad_title, ad_description, ad_date, ad_time, ad_price } = req.body

  const query =
    'UPDATE ads' +
    ' SET' +
    ' ad_title="' + ad_title + '"'
  ' ad_description="' + ad_description + '"'
  ' ad_schedule="' + ad_schedule + '"'
  ' ad_date=' + '"' + ad_date + '"'
  ' ad_time=' + '"' + ad_time + '"'
  ' ad_price=' + ad_price +
    ' WHERE ad_id=' + ad_id

  executeQuery(res, query, null)
})

app.post('/update_ad_employees', (req, res) => {
  const { ad_id, ad_employees } = req.body

  const query =
    'UPDATE ads' +
    ' SET' +
    ' ad_employees="' + ad_employees + '"'
    ' WHERE ad_id=' + ad_id

  executeQuery(res, query, null)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
