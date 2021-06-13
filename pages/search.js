import React from "react";
import { getInfo } from "../lib/utilSearch";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {search: ""};
		this.state = {length: 0};
		this.state = {mySolves: []};
	}

	   handleUpdate(evt) {
    	this.setState({search: evt.target.value});
  	}

  	async handleSearch(evt) {
  		// console.log(this.state.search);
  		const user = await getInfo(this.state.search);
  		// console.log(user.solves);
  		// this.setState({ user: user.solves });
  		this.setState({user});
  		var list="";
  		for (var i=0; i<user.solves.length; i++) {
  			list = user.solves[i].name + " " + user.solves[i].time + " " + user.solves[i].cube;
  			list = list.split('\n').map(str => <p> {str} </p>);
  				// console.log(list[0].props.children);
  				this.setState(previousState => ({
  					mySolves: [...previousState.mySolves, list]
  				}))
  		}
  		// console.log(this.state.mySolves);
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

  	/* render() {
  		return (
  			<div>
  			<h4 className="text">Enter a name below to see all the times!</h4>
  			<p><input type='text' value={this.state.search} onChange={this.handleUpdate.bind(this)} /></p>
  			<button className="button-style" onClick={this.handleSearch.bind(this)}>Search</button>

  			{this.state.user ? <div>
  				<h4 className='text'> {this.state.user.name}, {this.state.user.time} </h4>
  				<h4 className='text'> {this.state.user.rank} out of {this.state.length}! </h4>
  			</div> : <p className="text">Note: If nothing shows up the name hasn't been added yet</p>}

  			</div>
  		)
  	}*/ 

  	render() {
  		return (
  			 <div>
  			<h4 className="text">Enter a name below to see all the times!</h4>
  			<p><input type='text' value={this.state.search} onChange={this.handleUpdate.bind(this)} /></p>
  			<button className="button-style" onClick={this.handleSearch.bind(this)}>Search</button>


  			{this.state.mySolves && this.state.mySolves.length ? <div>
  				<table className="tableForSearch">
  				<div align="right" className="text">{this.state.mySolves}</div>
  				</table>
  				</div> : <p className="text">Note: If nothing shows up the name hasn't been added yet</p>}


  			</div>
  		)
  	}
}

export default Search; 