const express = require("express")
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('express app for movies test')
})

app.listen(port, function (req, res) {
  console.log(`express server is running on http://localhost: ${port}`);
})