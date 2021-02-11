const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({message: "hello"})
})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})