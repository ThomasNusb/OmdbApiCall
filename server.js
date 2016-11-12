"use strict"

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');
const path = require('path');
const _ = require('underscore');
const SearchFilm = React.createFactory(require('./components/SearchFilm'));
const http = require('http');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('connect-livereload')());

app.get('/', function (req, res) {

  var films = [];
  const htmlFilms = ReactDOMServer.renderToString( SearchFilm(films) );

  res.render("page1", {
    films: htmlFilms,
  });

});

app.get('/search', function (req, res) {

  res.setHeader('Content-Type', 'application/json');

  const strType = req.query.typeFilm != 'all' ? '&type=' + req.query.typeFilm : ''

  var options = {
    host: 'www.omdbapi.com',
    path: '/?s='+req.query.titleFilm+'&r=json'+strType
  };

  var callback = function(response) {

    var films = '';

    response.on('data', function (data) {
      films += data;
    });

    response.on('end', function (data) {
      res.send(films);
    });

  };

  http.request(options, callback).end();

});

app.listen(3000);
