import React, {Component} from "react";
import Layout from '../components/MyLayout.js';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      milliSecondsElapsed: 0,
      timerInProgress: false // state to detect whether timer has started
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
    this.setState(
      {
        timerInProgress: false
      },
      () => {
        clearInterval(this.timer);
        this.startBtn.focus();
      }
    );
  };
  render() {
    return (
	    <Layout>
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
	        <h1>{this.state.milliSecondsElapsed/100}</h1>
	      </div>
      </Layout>
    );
  }
}
