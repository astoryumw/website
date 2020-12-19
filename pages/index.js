import React, {Component} from "react";
import Layout from '../components/MyLayout.js';
import Table from 'react-bootstrap/Table'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myArray: [], // <- add initial empty array
      data: [], // this'll be the table?
      milliSecondsElapsed: 0,
      total: 0, // this is my total, add the times each go through to the total and then divide by amount of times
      average: 0,
      high: 0, // highest value
      low: 0, // lowest value
      count: 0,
      last: 0,
      timerInProgress: false, // state to detect whether timer has started
    };
    this.updateState = this.updateState.bind(this);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("keypress", this.keyPress);
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
  };

  handleStart = () => {
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
    if (this.state.average === 0) { // if its the first go through, average is set to first value
      this.setState({
        average: (this.state.milliSecondsElapsed / 100).toFixed(2)
      })
    }

    this.setState({ // adds value to the total
      total: this.state.total + this.state.milliSecondsElapsed
    });
    this.setState({
      last: this.state.milliSecondsElapsed/100
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
    this.setState( // adding the value to the array and then clearing the timer, shifting focus to start button
      (previousState) => ({
        timerInProgress: false,
        myArray: [
          ...previousState.myArray, // <-- shallow copy existing data
          this.state.milliSecondsElapsed / 100 // <-- add new time
        ]
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



    // it makes the first value equal to the average, then averages the second value on the third run
    // so on, so forth
    

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

    this.startBtn.focus();

  };


  // find the average AT EVERY GO 

  render() {
    const myTotal = this.state.total;
    return (
	    <Layout>

      <Table striped bordered hover align="right" width="200px">
        <thead>
          <tr>
            <th>Last Time</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{this.state.myArray.join("\n")}</td>
          </tr>
        </tbody>
      </Table>

      <p>Press the spacebar to start/stop the timer.</p>
      <p>Press the c button to clear everything.</p>

	      <div className="index" align='center'>
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
	        <h1>{this.state.milliSecondsElapsed/100}</h1>
	      </div>



        <Table striped bordered hover align="center" width="200px">
          <thead>
            <tr>
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


        </Table>


        
      </Layout>



    );
  }
}
