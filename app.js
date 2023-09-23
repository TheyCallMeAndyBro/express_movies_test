const express = require("express")
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const movies = require('./public/jsons/movies.json').results
const BASE_IMG_URL = 'https://movie-list.alphacamp.io/posters/'

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/movies')
})

app.get('/movies', (req, res) => {
  res.render('index', {movies, BASE_IMG_URL})
})

app.get('/movie/:id', (req, res) => {
  const id = req.params.id
  res.send(`read movie: ${id}`)
})

app.listen(port, function (req, res) {
  console.log(`express server is running on http://localhost: ${port}`);
}) 