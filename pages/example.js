import React from "react";
import { myArray } from "./index";

export default class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myArray: [],
			time: 0,
		};
		// this.setTimes = this.setTimes.bind(this);
		this.getTimes = this.getTimes.bind(this);
	}

	handleUpdate(evt) {
    	this.setState({ time: evt.target.value });
  	}

  	handleAdd = () => {
  		this.setState(
  			(previousState) => ({
				myArray: [
		      		this.state.time,
		      		...previousState.myArray
		    	],
  			}),
  		)
  		// setTimes method here
  		// let obj = this.state.time + "," + this.state.myArray;
    	// localStorage.setItem('myTimes', JSON.stringify(obj));
  	}

  	setTimes() {
    	let obj = this.state.myArray;
    	localStorage.setItem('myTimes', JSON.stringify(obj));
    	console.log('test');
  	}

  	// i think myArray is not working after i load because of something in getTimes()
 	getTimes() {
	    let data = localStorage.getItem('myTimes');
	    data = JSON.parse(data);
	    this.setState({ myArray: data });
  	}

  	// maybe add if else? 
  	// if this.getTimes is nothing then start at empty array?
  	// <button onClick={ () => this.setTimes() }>Save Times</button>
	render() {
		return (
			<div>
				<p>Add a number to the list by clicking the button</p>
				<p>{this.state.myArray.join(", ")}</p>
				<p><input type='text' value={this.state.time} onChange={this.handleUpdate.bind(this)} /></p>
				<button className="button-style" onClick={this.handleAdd.bind(this)}>Add</button>
				
				<button onClick={ () => this.getTimes() }>Load Times</button>
				<button onClick={ () => this.setTimes() }>Save Times</button>

			</div>
		)
	}
}