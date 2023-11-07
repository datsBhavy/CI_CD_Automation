const express = require('express')
const app = express()
const port = 80
require('dotenv').config()
app.get('/', (req, res) => {
  res.send('Hello World from backend folder! My name is '+process.env.NAME)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
