"use strict"

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
		this.props.onSearch(titleSearch,typeSearch);
	}

	keyDownHandler(event) {
		if(event.keyCode == 13){
            this.searchFilm();
        }
	}


 	render() {
 		return (

 			<div className="form-group">
	 			<div className="input-group col-md-6">
	 				<input type="text"
					 	//onChange={this.searchFilm}
	 					className="form-control" 
	 					onKeyDown={this.keyDownHandler} 
	 					ref={(ref) => this.titleInput = ref} 
	 					placeholder="Search ... " />
	                
	                <span className="input-group-btn">
	        			<button onClick={this.searchFilm} className="btn btn-primary" >
	        				<span className="glyphicon glyphicon-search"></span>
	        			</button>
	      			</span>
	 			</div>
				<br/>
				<div className="input-group col-md-2">
					<select className="form-control" 
						ref={ (ref) => this.typeInput = ref}
						onChange={this.searchFilm}>
							<option>all</option>
							<option>movie</option>
							<option>series</option>
							<option>game</option>
							<option>episode</option>
					</select>
				</div>
	 		</div>

 		)
  	}
}

module.exports = InputSearch;