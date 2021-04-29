import React from 'react';

class anotherExample extends React.Component {
  constructor(props) {
    super(props);
    var storedClicks = 0;

    if (localStorage.getItem('clicks')) {
      storedClicks = parseInt(localStorage.getItem('clicks'));
    }

    this.state = {
      clicks: storedClicks,
    };
    this.click = this.click.bind(this);
  }

  click() {
    var newclick = this.state.clicks + 1;
    this.setState({clicks: newclick});
    // Set it
    localStorage.setItem('clicks', newclick);
  }

  render() {
    return (
      <div>
        <h2>Click the button a few times and refresh page</h2>
        <button onClick={this.click}>Click me</button> 
      </div>
    );
  }
}
export default anotherExample;