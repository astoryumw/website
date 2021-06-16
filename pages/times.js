import Layout from '../components/MyLayout.js';
//import { getTime } from '../lib/utils';
import Search from './search'; 
import App from "../lib/App.js";
import "../styles.scss";

/* <button className='button-style' onClick={this.handleRubiks}>Rubiks</button>
<h1 className='text'>Best Times</h1>
{this.state.loading || !this.state.people3x3 ? (
	<div className='text'>There are not any times in the database. Record the first one!</div>
) : this.state.myRubiks ? (
	<div className="text">{this.state.people3x3}</div>
) : (
	<p>uhoh</p>
)} */

export default class Times extends React.Component {
	state = {
		// names: [],
		// times: [],
		people: [],
		peopleOH: [],
		people5x5: [],
		people4x4: [],
		people2x2: [],
		people6x6: [],
		people7x7: [],
		peopleOther: [],
		loading: true,
		click: false,
		myRubiks: false,
		myRubiksOH: false,
		my4x4: false,
		my5x5: false,
		my2x2: false,
		my6x6: false,
		my7x7: false,
		myOther: false,
		top3x3: "",
		top3x3OH: "",
		top2x2: "",
		top4x4: "",
		top5x5: "",
		top6x6: "",
		top7x7: "",
		topOther: "",
	}

	async componentDidMount() {
		const url = "http://35.194.72.130/api/list"; // const url = "http://35.194.72.130/api/list";
		const response = await fetch(url);
		const data = await response.json();
		console.log(data.times);

		var newData = "";

		var count=1,count1=1,count2=1,count3=1,count4=1,count5=1,count6=1,count7=1;
		for (var i=0; i<data.times.length; i++) {

			if (data.times[i].cube === "3x3x3") {
				newData = count + ". " + data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube;
				newData = newData.split('\n').map(str => <p>{str}</p>);
				this.setState(previousState => ({
					people: [...previousState.people, newData]
				}));
				this.setState({
					loading: false
				})
				if (count===1) {
					this.setState({
						top3x3: data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube
					});
				}
				count++;
			}

			if (data.times[i].cube === "3x3x3 OH") {
				newData = count1 + ". " + data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube;
				newData = newData.split('\n').map(str => <p>{str}</p>);
				this.setState(previousState => ({
					peopleOH: [...previousState.peopleOH, newData]
				}));
				this.setState({
					loading: false
				})
				if (count1===1) {
					this.setState({
						top3x3OH: data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube
					})
				}
				count1++;
			}

			if (data.times[i].cube === "2x2x2") {
				newData = count4 + ". " + data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube;
				newData = newData.split('\n').map(str => <p>{str}</p>);
				this.setState(previousState => ({
					people2x2: [...previousState.people2x2, newData]
				}));
				this.setState({
					loading: false
				})
				if (count4===1) {
					this.setState({
						top2x2: data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube
					})
				}
				count4++;
			}

			if (data.times[i].cube === "4x4x4") {
				newData = count2 + ". " + data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube;
				newData = newData.split('\n').map(str => <p>{str}</p>);
				this.setState(previousState => ({
					people4x4: [...previousState.people4x4, newData]
				}));
				this.setState({
					loading: false
				})
				if (count2===1) {
					this.setState({
						top4x4: data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube
					})
				}
				count2++;
			}

			if (data.times[i].cube === "5x5x5") {
				newData = count3 + ". " + data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube;
				newData = newData.split('\n').map(str => <p>{str}</p>);
				this.setState(previousState => ({
					people5x5: [...previousState.people5x5, newData]
				}));
				this.setState({
					loading: false
				})
				if (count3===1) {
					this.setState({
						top5x5: data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube
					})
				}
				count3++;
			}

			if (data.times[i].cube === "6x6x6") {
				newData = count5 + ". " + data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube;
				newData = newData.split('\n').map(str => <p>{str}</p>);
				this.setState(previousState => ({
					people6x6: [...previousState.people6x6, newData]
				}));
				this.setState({
					loading: false
				})
				if (count5===1) {
					this.setState({
						top6x6: data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube
					})
				}
				count5++;
			}

			if (data.times[i].cube === "7x7x7") {
				newData = count6 + ". " + data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube;
				newData = newData.split('\n').map(str => <p>{str}</p>);
				this.setState(previousState => ({
					people7x7: [...previousState.people7x7, newData]
				}));
				this.setState({
					loading: false
				})
				if (count6===1) {
					this.setState({
						top7x7: data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube
					})
				}
				count6++;
			}

			if (data.times[i].cube !== "7x7x7" && data.times[i].cube !== "6x6x6" && data.times[i].cube !== "5x5x5" && data.times[i].cube !== "4x4x4" && data.times[i].cube !== "3x3x3" && data.times[i].cube !== "2x2x2" && data.times[i].cube !== "3x3x3 OH") {
				newData = count7 + ". " + data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube;
				newData = newData.split('\n').map(str => <p>{str}</p>);
				this.setState(previousState => ({
					peopleOther: [...previousState.peopleOther, newData]
				}));
				this.setState({
					loading: false
				})
				if (count7===1) {
					topOther: data.times[i].name + ", " + data.times[i].time + ", " + data.times[i].cube
				}
				count7++;
			}
		}

	}

	handleRubiks = () => {
		this.setState({
			myRubiks: true
		})
		
	}

	handleRubiksOH = () => {
		this.setState({
			myRubiksOH: true
		})
	}

	handle2x2 = () => {
		this.setState({
			my2x2: true
		})
	}

	handle5x5 = () => {
		this.setState({
			my5x5: true
		})
	}

	handle4x4 = () => {
		this.setState({
			my4x4: true
		})
	}

	handle6x6 = () => {
		this.setState({
			my6x6: true
		})
	}

	handle7x7 = () => {
		this.setState({
			my7x7: true
		})
	}

	handleOther = () => {
		this.setState({
			myOther: true
		})
	}

	handleClick = () => {
		this.setState({
			click: true
		})
	}

	goBack = () => {
		this.setState({
			click: false
		})
		this.setState({
			myRubiks: false
		})
		this.setState({
			myRubiksOH: false
		})
		this.setState({
			my2x2: false
		})
		this.setState({
			my4x4: false
		})
		this.setState({
			my5x5: false
		})
		this.setState({
			my6x6: false
		})
		this.setState({
			my7x7: false
		})
		this.setState({
			myOther: false
		})
	}



	render() {
		return (
			<Layout>
				<div className='background'>
					<table align='left' width="50%">
						<App />
						<Search />
					</table>
					<table align="right" className="tableForTimes" width="50%">
						<h4 className="text">Rubiks Records</h4>
						{!this.state.click ? (
							<div>
							<h4 className="text">Top Times For Each Cube</h4>
							<div className="text">{this.state.top3x3}</div>
							<p></p>
							<div className="text">{this.state.top3x3OH}</div>
							<p></p>
							<div className="text">{this.state.top2x2}</div>
							<p></p>
							<div className="text">{this.state.top4x4}</div>
							<p></p>
							<div className="text">{this.state.top5x5}</div>
							<p></p>
							<div className="text">{this.state.top6x6}</div>
							<p></p>
							<div className="text">{this.state.top7x7}</div>
							<p></p>
							<div className="text">{this.state.topOther}</div>
							<p></p>
							<button className='buttonTimes' onClick={this.handleClick}>Click here to see all times for a cube</button>
							</div>
						) : this.state.myRubiks ? (
							<div><h4 className='text'>3x3x3</h4>
							<div className="text">{this.state.people}</div>
							<button className='buttonTimes' onClick={this.goBack}>Back</button>
							</div>
						) : this.state.myRubiksOH ? (
							<div><h4 className='text'>3x3x3 OH</h4>
							<div className="text">{this.state.peopleOH}</div>
							<button className='buttonTimes' onClick={this.goBack}>Back</button>
							</div>
						) : this.state.my2x2 ? (
							<div><h4 className='text'>2x2x2 Records</h4>
							<div className="text">{this.state.people2x2}</div>
							<button className='buttonTimes' onClick={this.goBack}>Back</button>
							</div>
						) : this.state.my4x4 ? (
							<div><h4 className='text'>4x4x4 Records</h4>
							<div className="text">{this.state.people4x4}</div>
							<button className='buttonTimes' onClick={this.goBack}>Back</button>
							</div>
						) : this.state.my5x5 ? (
							<div><h4 className='text'>5x5x5 Records</h4>
							<div className="text">{this.state.people5x5}</div>
							<button className='buttonTimes' onClick={this.goBack}>Back</button>
							</div>
						) :  this.state.my6x6 ? (
							<div><h4 className='text'>6x6x6 Records</h4>
							<div className="text">{this.state.people6x6}</div>
							<button className='buttonTimes' onClick={this.goBack}>Back</button>
							</div>
						) :  this.state.my7x7 ? (
							<div><h4 className='text'>7x7x7 Records</h4>
							<div className="text">{this.state.people7x7}</div>
							<button className='buttonTimes' onClick={this.goBack}>Back</button>
							</div>
						) : this.state.myOther ? (
							<div><h4 className='text'>Other cubes</h4>
							<div className="text">{this.state.peopleOther}</div>
							<button className='buttonTimes' onClick={this.goBack}>Back</button>
							</div>
						) : (
						<div>
							<button className='buttonTimes' onClick={this.handleRubiks}>3x3x3</button>
							<button className='buttonTimes' onClick={this.handleRubiksOH}>3x3x3 OH</button>
							<button className='buttonTimes' onClick={this.handle2x2}>2x2x2</button>
							<button className='buttonTimes' onClick={this.handle4x4}>4x4x4</button>
							<button className='buttonTimes' onClick={this.handle5x5}>5x5x5</button>
							<button className='buttonTimes' onClick={this.handle6x6}>6x6x6</button>
							<button className='buttonTimes' onClick={this.handle7x7}>7x7x7</button>
							<button className='buttonTimes' onClick={this.handleOther}>Other</button>
						</div>
						)}


					</table>

				</div>
			</Layout>
		)
	}
}

