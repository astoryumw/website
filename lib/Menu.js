import React from 'react';

export let my3x3x3;

export default class Menu extends React.Component {
constructor(){
 super();
 this.state = {
       displayMenu: false,
       my3x3x3: false,
       oneHanded: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  this.handle3x3x3 = this.handle3x3x3.bind(this);
  this.oneHanded = this.oneHanded.bind(this);
};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    	document.addEventListener('click', this.hideDropdownMenu);
    });
}

hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
}

// declare is false in case the user has selected both
handle3x3x3() {
  	this.setState({
  		my3x3x3: true
  	})
  	this.setState({
  		oneHanded: false
  	})
}

oneHanded() {
	this.setState({
  		my3x3x3: false
  	})
  	this.setState({
  		oneHanded: true
  	})
}


  render() {
  	console.log("Menu: " + this.state.my3x3x3);
    return (
        <div style = {{width:"200px"}} >
         <button className='button-style' onClick={this.showDropdownMenu}> Select Cube </button>

          { this.state.displayMenu ? (
          <ul>
         <li><button className='button-style' onClick={this.handle3x3x3}>3x3x3</button></li>
         <li><button className='button-style' onClick={this.oneHanded}>3x3x3 one-handed</button></li>

          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}