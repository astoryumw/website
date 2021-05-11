import Layout from '../components/MyLayout.js';
//import { getTime } from '../lib/utils';
import Search from './search'; 
import App from "../lib/App.js";



export default class Times extends React.Component {
	state = {
		// names: [],
		// times: [],
		people: [],
		loading: true,
	}

	async componentDidMount() {
		const url = "http://35.194.72.130/api/list";
		const response = await fetch(url);
		const data = await response.json();
		// console.log(data.times.length);

		var newData = "";



		for (var i=0; i<data.times.length; i++) {
			newData = i+1 + ". " + data.times[i].name + ", " + data.times[i].time;
			newData = newData.split('\n').map(str => <p>{str}</p>);
			
			this.setState(previousState => ({
				people: [...previousState.people, newData]
			}));
			this.setState({
				loading: false
			})
		}

		// console.log(this.state.people);
	}

	render() {
		return (
			<Layout>
				<div className='background' style={{height:575}}>
					<table align='left' width="50%">
						<App />
						<Search />
					</table>
					<table align="right" className="tableForTimes" width="50%">
						<h1 className='text'>Best Times</h1>
						{this.state.loading || !this.state.people ? (
							<div className='text'>There are not any times in the database. Record the first one!</div>
						) : (
							<div className="text">{this.state.people}</div>
						)}
					</table>
				</div>
			</Layout>
		)
	}
}

