import Layout from "../components/MyLayout.js";
import { postWriting } from "../lib/utilClass.js";

export default class Class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {paragraph: ""};
		this.state = {receive: ""};
		this.state = {testingString: ""};
		this.state = {loading: false};
		this.state = {length: 0};
		this.state = {myArray: []};
	}

	handleUpdate(evt) {
		this.setState({ paragraph: evt.target.value });
	}

	async handleAddUpdate(evt) {
		await postWriting(this.state.paragraph);
		alert("Added!");
	}

	async componentDidMount() {
		// console.log("I'm here");
		this.setState({
			loading: true
		});
		// 35.194.72.130
		const url = "http://35.194.72.130/api/retrieveText";
		const response = await fetch(url);
		const data = await response.json();
		// console.log(data.text[0]);

		// 35.194.72.130
		const newUrl = "http://35.194.72.130/api/retrieveLength";
		const newResponse = await fetch(newUrl);
		const newData = await newResponse.json();
		// console.log(data.size[0].rows);

		try {
			this.setState({ length: newData.size[0].rows }) // print out each row
			// console.log(this.state.length);
		} catch (err) {

		}

		try {
			// this.setState({array: data.text[0]});
			// console.log("array1 " + this.state.array);
			for (var i=0; i<this.state.length+1; i++) { // it'll try to add one more but catch catches it
				// console.log(data.text[i]);
				this.setState({ testingString: data.text[i]});
				// console.log(this.state.testingString);

				// console.log(this.state.array);
				this.state.myArray.push("("+this.state.testingString.id+")" + ". " + this.state.testingString.para + " ");
				// this.state.myArray.push(",\n ");

				// console.log("test " + this.state.myArray);
			}

		} catch (err) {
			// console.error(err.message);
		}
	}
	// ^\d+\ 

	render() {
		return (
			<Layout>
			<div className='background' >
				<h3 className='text' align="left">To all who see it...</h3>
				<p className='text'>This page was created off for a project for one of my gen ed classes. The instructions 
				for the project were pretty simply, "Do something on the web about the web." As I thought 
				through different ideas, I eventually came to this one; I wanted to create a page where 
				anyone could come there and just, share some thoughts. Share whatever they want to say anonymously.
				Alas, from there came this.</p>
				<p className='text'>After my class ends in a few days I might make this page a little more cubing specific 
				but for now it is just a page: share whatever you like.</p>
				<p><input type='text' value={this.state.paragraph} onChange={this.handleUpdate.bind(this)} /></p>
				<button className="button-style" onClick={this.handleAddUpdate.bind(this)}>Add</button>



				{this.state.loading ? (
					<table className='newTableForClass' align="right" height="190px">
						<p className="text">{this.state.myArray}</p>

					</table>
				) : (
					<p></p>
				)}
			</div>
			</Layout>
		)
	}
}