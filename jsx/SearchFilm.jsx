"use strict"

const React = require('react');
const AllFilms = require('./AllFilms');
const InputSearch = require('./InputSearch');

class SearchFilm extends React.Component {

	constructor(props) {
		super(props);
		this.state = { films: this.props.films };
		this.doSearch = this.doSearch.bind(this);
	}

	doSearch(titleSearch,type) {
		const strType = type != 'all' ? '&typeFilm='+type : ''
		const url = '/search?titleFilm=' + titleSearch + '&typeFilm=' + type;
		$.get(url,  (data) => {
			this.setState({
				films: data.Search
			})
		});
	}

 	render() {
 		return (
 			<div>
			 	<InputSearch onSearch={this.doSearch}/> 
 				<AllFilms films={this.state.films}/>
 			</div>
 		)
  	}
}

module.exports = SearchFilm;