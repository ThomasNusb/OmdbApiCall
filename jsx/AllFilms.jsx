const React = require('react');

class AllFilms extends React.Component {

 	render() {
 		const rows = [];
		
		if(this.props.films) {
			this.props.films.forEach(
				(f) => rows.push(<Film film={f} />)
			);
		}

 		return rows.length > 0 ? this.displayFilms(rows) : this.displayNoResult();
  	}

  	displayFilms(rows) {
  		return (

	 		<table className="table table-hover">
	 			<thead>
	 				<tr>
		 				<th>Founded Results</th>
	 				</tr>
	 			</thead>
	 			<tbody>
	 				{rows}
	 			</tbody>
	 		</table>
	 	)
  	}

  	displayNoResult() {
  		return (
 				<div className="alert alert-info">
 					<strong>No Result...</strong>
 				</div>
 			)
  	}
}

class Film extends React.Component {

	render() {
		return (
            <tr>
				<td>
					<img src={this.props.film.Poster} className="col-md-2"/>
					<span className="col-md-6 col-md-offset-1">
						<h4> {this.props.film.Title} <small>({this.props.film.Year})</small> </h4>
						<br/>
						<span> type : {this.props.film.Type} </span>
					</span>
				</td>
            </tr>
		)
	}

}

module.exports = AllFilms;