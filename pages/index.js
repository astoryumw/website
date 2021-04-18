import React, {Component} from "react";
import Layout from '../components/MyLayout.js';
import Table from 'react-bootstrap/Table';
import "../styles.scss"
import { addTime } from "../lib/util";
import App from "../lib/App.js";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:"..."};
    // this.state = {difference: 0};
    this.state = {
      myArray: [], // <- add initial empty array
      myOldArray: [], // the array you need to load in
      milliSecondsElapsed: 0,
      total: 0, // this is my total, add the times each go through to the total and then divide by amount of times
      average: 0,
      high: 0, // highest value
      low: 0, // lowest value
      count: 0,
      last: 0, // the last element recieved
      timerInProgress: false, // state to detect whether timer has started
      startTime: 0,
      endTime: 0,
      loading: false, // this becomes true when something is loaded or first number added
      otherLoading: false,
    };
    this.updateState = this.updateState.bind(this);
    this.textInput = React.createRef();
    this.setTimes = this.setTimes.bind(this);
    this.getTimes = this.getTimes.bind(this);

  }

  componentDidMount() {
    window.addEventListener("keypress", this.keyPress);
    this.getTimes();
  }

  componentWillUnmount() {
    window.removeEventListener("keypress", this.keyPress);
  }

  textInput = () => {
    clearInterval(this.timer);
  };

  updateState(e) {
    this.setState({ milliSecondsElapsed: e.target.milliSecondsElapsed });
  }


  // press l to load times?
  // need a way to cancel all of these if someone is entering a time
  keyPress = (e) => {
    if (e.keyCode === 32) {
      // some logic to assess stop/start of timer
      if (this.state.milliSecondsElapsed === 0) {
        this.startBtn.click();
      } else if (this.state.timerInProgress === false) {
        this.startBtn.click();
      } else {
        this.stopBtn.click();
      }
    }
    if (e.keyCode === 99) {
      this.clearBtn.click();
    }
    if (e.keyCode === 100) {
      this.deleteBtn.click();
    }
  };

  handleStart = () => {

    this.setState({
      startTime: Date.now()
    })

    if (this.state.timerInProgress === true) return;

    this.setState({
      milliSecondsElapsed: 0
    });
    this.timer = setInterval(() => {
      this.setState(
        {
          milliSecondsElapsed: this.state.milliSecondsElapsed + 1,
          timerInProgress: true
        },
        () => {
          this.stopBtn.focus();
        }
      );
    }, 10);
  };

  handleStop = () => {
    // console.log(this.state.milliSecondsElapsed);
    if (this.state.average === 0) { // if its the first go through, average is set to first value
      this.setState({
        average: (this.state.milliSecondsElapsed / 100).toFixed(2)
      })
    }

    this.setState({ loading: true });

    this.setState({ // adds value to the total
      total: this.state.total + this.state.milliSecondsElapsed
    });
    this.setState({
      last: this.state.milliSecondsElapsed
    })
    if (this.state.high < this.state.milliSecondsElapsed) { // finds slowest time
      this.setState({
        high: this.state.milliSecondsElapsed
      })
    }
    if (this.state.low === 0) { // finds fastest time
      this.setState({
        low: this.state.milliSecondsElapsed
      })
    }
    if (this.state.low > this.state.milliSecondsElapsed) { // because i start with low = 0, it will never be less than that
      this.setState({ 
        low: this.state.milliSecondsElapsed
      })
    }
    this.setState( // adding the value to the array
      (previousState) => ({
        timerInProgress: false,
        // [{this.state.milliSecondsElapsed / 100}].concat(myArray);
       myArray: [
          this.state.milliSecondsElapsed / 100, // <-- add new time
          ...previousState.myArray // <-- shallow copy existing data
        ],
      }),
      () => {
        clearInterval(this.timer);
        this.startBtn.focus();
      }
    );

    if (this.state.count === 1) {
      this.setState({
        // average: ((this.state.total) / (this.state.myArray.length) / 100).toFixed(2)
        average: (this.state.total / this.state.myArray.length / 100).toFixed(2)
      })
    }    

    this.setState({
      count: 1
    })

    this.setState({
      endTime: Date.now()
    })

    this.setState({
      myOldArray: this.state.myArray
    })

    this.setTimes();
    // console.log(this.state.milliSecondsElapsed);

  };

  clear = () => {
    this.setState({
      average: 0
    })
    this.setState({
      high: 0
    })
    this.setState({
      low: 0
    })
    this.setState({
      total: 0
    })
    this.setState({
      myArray: []
    })
    this.setState({
      range: 0
    })
    this.setTimes();
    this.startBtn.focus();

    

  };


  delete = () => { // should delete the last item
    
    var array=this.state.myArray;
    var array2=[];

    var last = array[0]
    var add=0;

    // if array2 is empty - get rid of things saying infinity

    for (var u=1; u<array.length; u++) {
      array2.push(array[u]);
    }

    if (array2.length == 0) {
      this.setState({
        total: 0
      })
      this.setState({
        low: 0
      })
      this.setState({
        high: 0
      })
      this.setState({
        myArray: []
      })
    } else {
      this.setState({ 
        myArray: this.state.myArray.splice(1) // to delete first element in the last time list (the last element added)
      })
      this.setState({
        low: (Math.min(...array2)*100)
      })
      this.setState({
        high: (Math.max(...array2)*100)
      })
      // find average
      for (var i=0; i<array2.length; i++) {
        add = add + array2[i];
      }
      this.setState({
        total: add*100
      })
    }
    this.setTimes();
    this.startBtn.focus();
  };

  setTimes() {
    let obj = this.state.myArray;
    localStorage.setItem('myTimes', JSON.stringify(obj));
    // console.log(obj);
    let obj1 = this.state.low;
    localStorage.setItem('lowTime', JSON.stringify(obj1));
    if (this.state.milliSecondsElapsed/100 > this.state.high) {
      let obj2 = this.state.milliSecondsElapsed/100;
      localStorage.setItem('highTime', JSON.stringify(obj2));
    } else {
      let obj2 = this.state.high;
      localStorage.setItem('highTime', JSON.stringify(obj2));
    }
    // console.log(obj2);
    let obj3 = this.state.total;
    localStorage.setItem('totalTime', JSON.stringify(obj3));

    // add obj for last time, then add that to the array
    let obj4 = this.state.milliSecondsElapsed/100;
    localStorage.setItem('lastTime', JSON.stringify(obj4));
    // console.log(obj4 + " obj4");

  }

  // retrieve times from localStorage
  getTimes() {
    let data = localStorage.getItem('myTimes'); // average, doesn't include last time
    data = JSON.parse(data);
    this.setState({ myArray: data });
    // console.log(this.state.myArray);

    let data1 = localStorage.getItem('lowTime'); // fastest time
    data1 = JSON.parse(data1);
    // console.log(data1 + " data1");
    this.setState({ low: data1 });
    // console.log(this.state.low);

    let data2 = localStorage.getItem('highTime'); // slowest time
    data2 = JSON.parse(data2);
    this.setState({ high: data2 });

    let data3 = localStorage.getItem('totalTime'); // total time used with average
    // data3 = JSON.parse(data3);
    // this.setState({ total: data3 });
    // console.log(data3 + " total");

    let data4 = localStorage.getItem('lastTime'); // last time
    let data5 = JSON.parse(data4) + (JSON.parse(data3)/100); // add last time with total
    // console.log(data5 + " last");
    this.setState({ last: data5*100 });
    // console.log(this.state.last);

    this.setState({ otherLoading: true });

    // for some reason its taking last as 0
    this.setState(previousState => ({
      myArray: [data4, ...previousState.myArray ] // you can't set a variable (this.state.last) in this method and then use it here
    }));

    // console.log(this.state.myArray);

    this.setState({ total: data5*100});
    // console.log(this.state.myArray.length);

    if (data1>data4) { // if last number is less than lowTime
      this.setState({ low: data4*100 })
    }

    if (data2 < data4) { // if last number is higher than highTime
      this.setState({ high: data4*100 })
    }


  }

     /*   {!this.state.loading && !this.state.myArray.length ? (
        <div>
          <button onClick={ () => this.getTimes() }>Load Times</button>
          <p className='text'>This button will load your last times!</p>
        </div>
      ) : (
        <p></p>
      )}
      */


//       <div className="fixed"> <img src="/static/IMG_1933.jpeg" align='left' width='360' height='240' /> </div>

  render() {
    const myTotal = this.state.total;
    // console.log(this.state.myArray);
    return (
	    <Layout>
      <div className='background' style={{height:575}}>



      <div>
      <table align="right" className='antTable'>
      <Table align="center" height="150px" className='myTable'>
        <thead>
          <tr>
            <th className="text" align="center">Last Time</th>
          
          </tr>
        </thead>

        <tbody>
          <tr>
                <td className="text" align="center">{this.state.myArray.join(", ")}</td>  
            
          </tr>
        </tbody>

      </Table>
      
      </table>
      </div>

      <p className="text" align='left'> &ensp; Press the <b>spacebar</b> to start/stop the timer.</p>
      <p className="text" align='left'> &ensp; Press the <b>c</b> button to clear everything.</p>
      <p className="text" align='left'> &ensp; Press the <b>d</b> button to delete the last time.</p>
      <p className="text" align='left'> &ensp; Lastly, write your name and then the time below </p>
      <p className="text" align='left'> &ensp; of your best time. Then, hit the add button to </p>
      <p className="text" align='left'> &ensp; add your time to the database! </p>
      <App />


      <table align='left'>
        <div className="fixed"> <img src="../static/IMG_4152.png" width='15%' height='15%' /> </div>
      </table>

	      <div align='center' className="center" height="200px">
	        <input 
	          value={this.state.milliSecondsElapsed/100}
	          onChange={this.updateState}
	          ref={this.textInput}
	          readOnly={true}
	        />

	        <button onClick={this.handleStart} ref={(ref) => (this.startBtn = ref)}>
	          START
	        </button>

	        <button onClick={this.handleStop} ref={(ref) => (this.stopBtn = ref)}>
	          STOP
	        </button>

          <button onClick={this.clear} ref={(ref) => (this.clearBtn = ref)}>
            CLEAR 
          </button>

          <button onClick={this.delete} ref={(ref) => (this.deleteBtn = ref)}>
            DELETE
          </button>

	        <h1>{this.state.milliSecondsElapsed/100}</h1>
	      </div>



        <table align="center" width="200px" className="text">
          <thead>
            <tr height="100px">
              <th>Average</th>
              <th>Fastest</th>
              <th>Slowest</th>
              <th>Range</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{myTotal ? (
                  <td>{(this.state.total / this.state.myArray.length / 100).toFixed(2)}</td>
                ) : (
                  <td> 0 </td>
                )}</td>
              <td>{this.state.low/100}</td>
              <td>{this.state.high/100}</td>
              <td>{(this.state.high/100 - this.state.low/100).toFixed(2)}</td>
            </tr>
          </tbody>
         </table>

      </div>



      </Layout>


    );
  }
}


