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
      length: 0, // this is the length of the array added for load and save
      clearMe: false, // if clear make clearMe as true, if clearMe is true then setTimes as 0
      deleteMe: false,
      clearOnce: 0,
      testArray: [],
    };
    this.updateState = this.updateState.bind(this);
    this.textInput = React.createRef();
    this.setTimes = this.setTimes.bind(this);
    this.getTimes = this.getTimes.bind(this);

  }

  componentDidMount() {
    window.addEventListener("keypress", this.keyPress);
    this.getTimes();
    console.log("Hello!");
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
      this.setState({
        clearMe: true
      })
      this.setTimes();
    }
    if (e.keyCode === 100) {
      this.deleteBtn.click();
      this.setState({
        deleteMe: true
      })
      // console.log("value of deleteMe " + this.state.deleteMe);
      this.setTimes();
    }
  };

  handleStart = () => {

    this.setState({
      clearMe: false
    })

    this.setState({
      deleteMe: false
    })

    if (isNaN(this.state.low)) {
      this.setState({
        low: 0
      })
    }

    if (isNaN(this.state.high)) {
      this.setState({
        high: 0
      })
    }

    if (isNaN(this.state.total)) {
      this.setState({
        total: 0
      })
    }

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

    this.setState({
      length: this.state.length + 1
    })

    this.setState({
      testArray: this.state.myArray
    })
    // console.log(this.state.length);
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
    this.setState({
      length: 0
    })
    this.setState({
      clearMe: true
    })

    // console.log(this.state.clearMe + "in the clear");
    this.setTimes();
    this.startBtn.focus();

    // console.log("Clear");

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
      // console.log("the array before delete " + this.state.myArray);
      this.setState({ 
        myArray: this.state.myArray.splice(1) // to delete first element in the last time list (the last element added)
      })
      // console.log("the array after delete " + this.state.myArray);
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
    this.setState({
      length: this.state.length - 1
    })
    this.setState({
      deleteMe: true
    })
    // console.log(this.state.deleteMe);

    // this.setState({
    //   myOldArray: myOldArray
    // })

    // this.setTimes();
    this.startBtn.focus();



    // console.log(this.state.myArray + " this is myArray");
    // console.log(this.state.myOldArray + " this is myOldArray");

    // console.log(this.state.testArray);

    // console.log("Delete");

  };

  // for some reason after you clear and reload '0,' is there
  setTimes() {
    let obj = [];
    // console.log(this.state.clearMe + " clearMe");
    if (this.state.clearMe == true) {
        obj = [];
        localStorage.setItem('times', JSON.stringify(obj));
        // console.log(obj);

        let obj1 = 0;
        localStorage.setItem('last', JSON.stringify(obj1));

        let obj2 = 0;
        localStorage.setItem('list', JSON.stringify(obj2));

        let obj3 = 0;
        localStorage.setItem('theTotal', JSON.stringify(obj3));

        let obj4 = 0;
        localStorage.setItem('fastest', JSON.stringify(obj4));

        let obj5 = 0;
        localStorage.setItem('slowest', JSON.stringify(obj5));

        let obj6 = false;
        localStorage.setItem('deleteMeTrue', JSON.stringify(obj6));
    } else if (this.state.deleteMe == true) {
      obj = this.state.myOldArray;
      this.setState({
        myArray: this.state.myOldArray
      })
      // console.log(this.state.myArray);
      localStorage.setItem('times', JSON.stringify(obj));
      // console.log(obj + " I'm in delete me");

      let obj1 = 0; // there is no last me it was deleted
      localStorage.setItem('last', JSON.stringify(obj1));

      let obj2 = this.state.length;
      localStorage.setItem('list', JSON.stringify(obj2));

      let obj3 = this.state.total;
      localStorage.setItem('theTotal', JSON.stringify(obj3));


      let obj4 = this.state.low;
      localStorage.setItem('fastest', JSON.stringify(obj4));
      // console.log(obj4);

      let obj5 = this.state.high;
      localStorage.setItem('slowest', JSON.stringify(obj5));

      let obj6 = true;
      localStorage.setItem('deleteMeTrue', JSON.stringify(obj6));

      // var newTotal = 0
      // if (isNaN(this.state.total)) {
      //   for (var x=0; x<this.state.myOldArray.length; x++) {
      //     newTotal = this.state.myOldArray[x];
      //   }
      //   obj3 = newTotal;
      //   localStorage.setItem('theTotal', JSON.stringify(obj3));
      // }

    } else {
        obj = this.state.myArray;
        localStorage.setItem('times', JSON.stringify(obj));
        // console.log(obj);

        let obj1 = this.state.milliSecondsElapsed/100;
        localStorage.setItem('last', JSON.stringify(obj1));
        // console.log(obj1);

        let obj2 = this.state.length + 1;
        localStorage.setItem('list', JSON.stringify(obj2));
        // console.log(obj2 + " setlength");

        // console.log(this.state.total)
        let obj3 = this.state.total + this.state.milliSecondsElapsed;
        localStorage.setItem('theTotal', JSON.stringify(obj3));
        // console.log(obj3 + " total");

        let obj4 = this.state.low;
        // console.log(obj4 + " " + this.state.low);
        let obj6 = this.state.milliSecondsElapsed;
        // console.log(obj6);
        localStorage.setItem('fastest', JSON.stringify(obj6));
        if (obj4 < obj6 && obj4 != 0) {
          localStorage.setItem('fastest', JSON.stringify(obj4));
        } 
        // console.log(obj4 < obj6);

        let obj5 = this.state.high;
        localStorage.setItem('slowest', JSON.stringify(obj6));
        if (obj5 > obj6) {
          localStorage.setItem('slowest', JSON.stringify(obj5));
        }

        obj6 = false;
        localStorage.setItem('deleteMeTrue', JSON.stringify(obj6));
      }
    if (isNaN(this.state.low)) {
      this.setState({
        low: 0
      })
    }

    if (isNaN(this.state.high)) {
      this.setState({
        high: 0
      })
    }

    if (isNaN(this.state.total)) {
      // console.log(this.state.myOldArray);
      // let current=this.state.myOldArray[0];
      // const sum = obj.map(v => v).reduce((sum, current) => sum + current, 0);
      // console.log(sum);
      this.setState({
        total: 0
      })
      // console.log(this.state.total);
      this.setState({
        length: 0
      })
      alert("There was an error. Restarting Average, Fastest, Slowest, and Range.")
    }
  }

  // retrieve times from localStorage
  getTimes() {
    let myTimes = localStorage.getItem('times');
    myTimes = JSON.parse(myTimes); // this is array
    // console.log(myTimes);

    let myLast = localStorage.getItem('last');
    myLast = JSON.parse(myLast);

    let myList = localStorage.getItem('list');
    myList = JSON.parse(myList);

    let myTruth = localStorage.getItem('deleteMeTrue');
    myTruth = JSON.parse(myTruth);
    // console.log(myTruth);



    // // this for loop is what causes the program to add undefined times
    if (myTimes !== null) {
      for (var i=1; i<myTimes.length; i++) {
        myTimes[i] = " " + myTimes[i]; 
      }
    }

    if (myLast!==0) {
      this.setState(previousState => ({
        myArray: [myLast, myTimes]
      }));
    } else if (myTruth == true) { // maybe it would work by adding more items here, ehh
      // console.log("I'm here");
      this.setState({
        myArray: [myTimes]
      });
      // console.log("Hi!");
      this.setState({
        deleteMe: false
      })

    } else {
      this.setState({
        myArray: []
      });
    }

    // console.log(myLast + " " + myTimes);


    let myTotal = localStorage.getItem('theTotal');
    myTotal = JSON.parse(myTotal);
    // console.log(myTotal + " gettotal");

    this.setState({
      total: myTotal
    });

    this.setState({ length: myList });
    // console.log(myList + " getlength");

    let myFastest = localStorage.getItem('fastest');
    myFastest = JSON.parse(myFastest);
    // console.log(myFastest);
    this.setState({
      low: myFastest
    });

    let mySlowest = localStorage.getItem('slowest');
    mySlowest = JSON.parse(mySlowest);
    this.setState({
      high: mySlowest
    });

    // console.log("loading myarray" + this.state.myArray);
    if (this.state.myArray===",") {
      this.setState({
        myArray: []
      })
    }
  }

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
                  <td>{(this.state.total / this.state.length / 100).toFixed(2)}</td>
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


