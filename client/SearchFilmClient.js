const React = require('react');
const ReactDOM = require('react-dom');
const SearchFilm = 
  React.createFactory(require('../components/SearchFilm'));
 
const node = document.getElementById("component_container");

ReactDOM.render(SearchFilm({'films': []}), node);