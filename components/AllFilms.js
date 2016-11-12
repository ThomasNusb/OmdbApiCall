const React = require('react');

class AllFilms extends React.Component {

	render() {
		const rows = [];

		if (this.props.films) {
			this.props.films.forEach(f => rows.push(React.createElement(Film, { film: f })));
		}

		return rows.length > 0 ? this.displayFilms(rows) : this.displayNoResult();
	}

	displayFilms(rows) {
		return React.createElement(
			"table",
			{ className: "table table-hover" },
			React.createElement(
				"thead",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement(
						"th",
						null,
						"Founded Results"
					)
				)
			),
			React.createElement(
				"tbody",
				null,
				rows
			)
		);
	}

	displayNoResult() {
		return React.createElement(
			"div",
			{ className: "alert alert-info" },
			React.createElement(
				"strong",
				null,
				"No Result..."
			)
		);
	}
}

class Film extends React.Component {

	render() {
		return React.createElement(
			"tr",
			null,
			React.createElement(
				"td",
				null,
				React.createElement("img", { src: this.props.film.Poster, className: "col-md-2" }),
				React.createElement(
					"span",
					{ className: "col-md-6 col-md-offset-1" },
					React.createElement(
						"h4",
						null,
						" ",
						this.props.film.Title,
						" ",
						React.createElement(
							"small",
							null,
							"(",
							this.props.film.Year,
							")"
						),
						" "
					),
					React.createElement("br", null),
					React.createElement(
						"span",
						null,
						" type : ",
						this.props.film.Type,
						" "
					)
				)
			)
		);
	}

}

module.exports = AllFilms;