import Layout from '../components/MyLayout.js';
//import { getTime } from '../lib/utils';

export default class Times extends React.Component {
	state = {
		loading: true,
		person: null,
		time: 0,
		person1: null,
		time1: 0,
		person2: null,
		time2: 0,
		person3: null,
		time3: 0,
		person4: null,
		time4: 0,
		person5: null,
		time5: 0,
		person6: null,
		time6: 0,
		person7: null,
		time7: 0,
		person8: null,
		time8: 0,
		person9: null,
		time9: 0,
	};

	async componentDidMount() {
		const url = "http://localhost:3001/api/list";
		const response = await fetch(url);
		const data = await response.json();
		try {
			this.setState({ person: data.times[0].name, time: data.times[0].time, loading: false });
		} catch (e) {}
		try {
			this.setState({ person1: data.times[1].name, time1: data.times[1].time, loading: false });
		} catch (e) {}
		try {
			this.setState({ person2: data.times[2].name, time2: data.times[2].time, loading: false });
		} catch (e) {}
		try {
			this.setState({ person3: data.times[3].name, time3: data.times[3].time, loading: false });
		} catch (e) {}
		try {
			this.setState({ person4: data.times[4].name, time4: data.times[4].time, loading: false });
		} catch (e) {}
		try {
			this.setState({ person5: data.times[5].name, time5: data.times[5].time, loading: false });
		} catch (e) {}
		try {
			this.setState({ person6: data.times[6].name, time6: data.times[6].time, loading: false });
		} catch (e) {}
		try {
			this.setState({ person7: data.times[7].name, time7: data.times[7].time, loading: false });
		} catch (e) {}
		try {
			this.setState({ person8: data.times[8].name, time8: data.times[8].time, loading: false });
		} catch (e) {}
		try {
			this.setState({ person9: data.times[9].name, time9: data.times[9].time, loading: false });
		} catch (e) {}
	}

	// <div align="center">2) {this.state.person1}, {this.state.time1}</div>
	render() {
		return (
			<Layout>
			<div className='background' style={{height:575}}>
			<div className="fixed"> <img src="../static/IMG_4152.png" align='left' width='280' height='240' /> </div>
			<h1 align='center' className='text'>Best Times of the Month</h1>
				<div>
					{this.state.loading || !this.state.person ? (
						<div className='text'>There are not any times in the database. Record the first one!</div>
					) : (	
					 <div>
						<div align="center" className='text'>1) {this.state.person}, {this.state.time}</div>
					 </div>
					)}
					{!this.state.person1 ? (
						<div> </div>
					) : (
					 <div>
					 	<div align="center" className='text'>2) {this.state.person1}, {this.state.time1}</div>
					 </div>
					 )}
					{!this.state.person2 ? (
						<div> </div>
					) : (
					 <div>
					 	<div align="center" className='text'>3) {this.state.person2}, {this.state.time2}</div>
					 </div>
					 )}
					 {!this.state.person3 ? (
						<div> </div>
					 ) : (
					 <div>
					 	<div align="center" className='text'>4) {this.state.person3}, {this.state.time3}</div>
					 </div>
					 )}
					 {!this.state.person4 ? (
						<div> </div>
					 ) : (
					 <div>
					 	<div align="center" className='text'>5) {this.state.person4}, {this.state.time4}</div>
					 </div>
					 )}
					 {!this.state.person5 ? (
						<div> </div>
					 ) : (
					 <div>
					 	<div align="center" className='text'>6) {this.state.person5}, {this.state.time5}</div>
					 </div>
					 )}
					 {!this.state.person6 ? (
						<div> </div>
					 ) : (
					 <div>
					 	<div align="center" className='text'>7) {this.state.person6}, {this.state.time6}</div>
					 </div>
					 )}
					 {!this.state.person7 ? (
						<div> </div>
					 ) : (
					 <div>
					 	<div align="center" className='text'>8) {this.state.person7}, {this.state.time7}</div>
					 </div>
					 )}
					 {!this.state.person8 ? (
						<div> </div>
					) : (
					 <div>
					 	<div align="center" className='text'>9) {this.state.person8}, {this.state.time8}</div>
					 </div>
					 )}
					 {!this.state.person9 ? (
						<div> </div>
					 ) : (
					 <div>
					 	<div align="center" className='text'>10) {this.state.person9}, {this.state.time9}</div>
					 </div>
					 )}
				</div>
			</div>
			</Layout>
		)
	}


}

