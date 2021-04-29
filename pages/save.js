import React from "react";
import { myArray,milliSecondsElapsed,low,high} from './index.js';

export default class Example extends React.Component {
	constructor(props) {
		super(props);

		this.setTimes = this.setTimes.bind(this);
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
    // console.log(obj);
    let obj1 = this.state.low;
    localStorage.setItem('lowTime', JSON.stringify(obj1));

    let obj2 = this.state.high;
    localStorage.setItem('highTime', JSON.stringify(obj2));
    // console.log(obj2);
    let obj3 = this.state.total;
    localStorage.setItem('totalTime', JSON.stringify(obj3));

    // add obj for last time, then add that to the array
    let obj4 = this.state.milliSecondsElapsed/100;
    localStorage.setItem('lastTime', JSON.stringify(obj4));
  }

  	// i think myArray is not working after i load because of something in getTimes()
  getTimes() {
    let data = localStorage.getItem('myTimes');
    data = JSON.parse(data);
    this.setState({ myArray: data });

    let data1 = localStorage.getItem('lowTime');
    data1 = JSON.parse(data1);
    this.setState({ low: data1 });

    let data2 = localStorage.getItem('highTime');
    data2 = JSON.parse(data2);
    this.setState({ high: data2 });

    let data3 = localStorage.getItem('totalTime');
    data3 = JSON.parse(data3);
    this.setState({ total: data3 });

    let data4 = localStorage.getItem('lastTime');
    data4 = JSON.parse(data4);
    this.setState({ last: data4 });

    this.setState({ otherLoading: true });

  }

  loadMe = () => {
    if (!this.state.loading) {
      this.getTimes();
      this.setState({ loading: true });
    }
  }

  	// maybe add if else? 
  	// if this.getTimes is nothing then start at empty array?
  	// <button onClick={ () => this.setTimes() }>Save Times</button>
	render() {
		return (
			<div>
				<p>Add a number to the list by clicking the button</p>
				{this.state.myArray.length ? (
					<p>{this.state.myArray.join(", ")}</p>
				) : (
					<p></p>
				)}
			
				
				<p><input type='text' value={this.state.time} onChange={this.handleUpdate.bind(this)} /></p>
				<button className="button-style" onClick={this.handleAdd.bind(this)}>Add</button>
				
				<button onClick={ () => this.getTimes() }>Load Times</button>
				<button onClick={ () => this.setTimes() }>Save Times</button>

			</div>
		)
	}
}