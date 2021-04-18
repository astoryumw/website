import React from "react";
import { getInfo } from "../lib/utilSearch";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {search: ""};
		this.state = {length: 0};
	}

	handleUpdate(evt) {
    	this.setState({search: evt.target.value});
  	}

  	async handleSearch(evt) {
  		const user = await getInfo(this.state.search);
  		console.log(user);
  		this.setState({user: user.rank[0]})
  	}

  	async componentDidMount() {
  		const url = "http://35.194.72.130/api/length";
  		const response = await fetch(url);
  		const data = await response.json();
  		// console.log(data.rows);

  		// this isn't defining anything
  		try {
  			this.setState({
  				length: data.size[0].rows
  			})
  		} catch (err) {

  		}
  	}

  	render() {
  		return (
  			<div>
  			<h3 className="text">Enter a name below to see the rank</h3>
  			<p><input type='text' value={this.state.search} onChange={this.handleUpdate.bind(this)} /></p>
  			<button className="button-style" onClick={this.handleSearch.bind(this)}>Search</button>

  			{this.state.user ? <div>
  				<h3 className='text'> {this.state.user.name}, {this.state.user.time} </h3>
  				<h3 className='text'> {this.state.user.rank} out of {this.state.length}! </h3>
  			</div> : <p className="text">Note: If nothing shows up the name hasn't been added yet</p>}

  			</div>
  		)
  	}
}

export default Search; 