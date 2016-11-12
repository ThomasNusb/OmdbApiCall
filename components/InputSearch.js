"use strict";

const React = require('react');
const ReactDOM = require('react-dom');

class InputSearch extends React.Component {

	constructor(props) {
		super(props);
		this.searchFilm = this.searchFilm.bind(this);
		this.keyDownHandler = this.keyDownHandler.bind(this);
	}

	componentDidMount() {
		this.titleInput.focus();
	}

	searchFilm() {
		console.log(this.titleInput.value);
		const titleSearch = this.titleInput.value;
		const typeSearch = this.typeInput.value;
		this.props.onSearch(titleSearch, typeSearch);
	}

	keyDownHandler(event) {
		if (event.keyCode == 13) {
			this.searchFilm();
		}
	}

	render() {
		return React.createElement(
			'div',
			{ className: 'form-group' },
			React.createElement(
				'div',
				{ className: 'input-group col-md-6' },
				React.createElement('input', { type: 'text'
					//onChange={this.searchFilm}
					, className: 'form-control',
					onKeyDown: this.keyDownHandler,
					ref: ref => this.titleInput = ref,
					placeholder: 'Search ... ' }),
				React.createElement(
					'span',
					{ className: 'input-group-btn' },
					React.createElement(
						'button',
						{ onClick: this.searchFilm, className: 'btn btn-primary' },
						React.createElement('span', { className: 'glyphicon glyphicon-search' })
					)
				)
			),
			React.createElement('br', null),
			React.createElement(
				'div',
				{ className: 'input-group col-md-2' },
				React.createElement(
					'select',
					{ className: 'form-control',
						ref: ref => this.typeInput = ref,
						onChange: this.searchFilm },
					React.createElement(
						'option',
						null,
						'all'
					),
					React.createElement(
						'option',
						null,
						'movie'
					),
					React.createElement(
						'option',
						null,
						'series'
					),
					React.createElement(
						'option',
						null,
						'game'
					),
					React.createElement(
						'option',
						null,
						'episode'
					)
				)
			)
		);
	}
}

module.exports = InputSearch;