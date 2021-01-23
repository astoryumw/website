import Layout from '../components/MyLayout.js';
import { getTime } from '../lib/utils';

export default class Times extends React.Component {
	state = {
		loading: true,
		person: null,
		time: 0,
		person1: null,
		time1: 0,
	};

	async componentDidMount() {
		const url = "http://localhost:3001/list";
		const response = await fetch(url);
		const data = await response.json();
		try {
			this.setState({ person: data.times[0].name, time: data.times[0].time, loading: false });
			this.setState({ person1: data.times[1].name, time1: data.times[1].time, loading: false });
		} catch (e) {}
	}

	render() {
		return (
			<Layout>
			<h1 align='center'>Best Times of the Month</h1>
				<div>
					{this.state.loading || !this.state.person && this.state.person1 ? (
						<div>There are not any times in the database. Record the first one!</div>
					) : (	
					 <div>
						<div align="center">1) {this.state.person}, {this.state.time}</div>
						<div align="center">2) {this.state.person1}, {this.state.time1}</div>
					 </div>
					)}
				</div>
			</Layout>
		)
	}


}

