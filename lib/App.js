// App.js (client)
import React from 'react';
import { addTime } from "./util";
import Search from "../pages/search.js";
import "../styles.scss";


function App() {
  const [name, setName] = React.useState("")
  const [time, setTime] = React.useState("")
  const [cube, setCube] = React.useState("")
  const [click, setClick] = React.useState(false);
  const [rubiks, setRubiks] = React.useState(false);
  const [oh, setOh] = React.useState(false);
  const [my2x2x2, setMy2x2x2] = React.useState(false);
  const [my4x4x4, setMy4x4x4] = React.useState(false);
  const [my5x5x5, setMy5x5x5] = React.useState(false);
  const [my6x6x6, setMy6x6x6] = React.useState(false);
  const [my7x7x7, setMy7x7x7] = React.useState(false);
  const [other, setOther] = React.useState(false);
  const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;

  function handleUpdate(evt) {
    setName(evt.target.value);
  }

  function handleUpdateTime(evt) {
    // console.log(evt.target);
    if (rx_live.test(evt.target.value) && evt.target.value>=0) {
      setTime(evt.target.value);
    } else {
      alert("Please enter a positive number here.")
    }
  }

  function handleUpdateCube(evt) {
    setCube(evt.target.value);
  }

  function handleRubiks(evt) {
    setCube("3x3x3");
    setRubiks(true);
  }

  function handleOh(evt) {
    setCube("3x3x3 OH");
    setOh(true);
  }

  function handleMy2x2x2(evt) {
    setCube("2x2x2");
    setMy2x2x2(true);
  }

  function handleMy4x4x4(evt) {
    setCube("4x4x4");
    setMy4x4x4(true);
  }

  function handleMy5x5x5(evt) {
    setCube("5x5x5");
    setMy5x5x5(true);
  }

  function handleMy6x6x6(evt) {
    setCube("6x6x6");
    setMy6x6x6(true);
  }

  function handleMy7x7x7(evt) {
    setCube("7x7x7");
    setMy7x7x7(true);
  }

  function handleOther(evt) {
    setOther(true);
  }

  function handleClick(evt) {
    setClick(true);
  }


  async function handleAddTime(evt) {
    console.log(cube);
    if (cube==="") {
      alert("You must select a cube.");
    } else {
      await addTime(name,time,cube);
      alert("Added!");
      window.location.reload(false);
    }

  }

  // <p><input type='text' value={cube} onChange={handleCube} /></p>
  return <div>
    <h4 className="text">Enter your name, your time and then the cube you used to add it. Honor system please!</h4>
    <p className="text">Name: <input type='text' value={name} onChange={handleUpdate} /></p>
    <p className="text">Time: <input type='text' value={time} onChange={handleUpdateTime} /></p>
    <p>{click}</p>
    {!click ? (
      <button className='button-style' onClick={handleClick}>Select Cube</button> 
    ) : rubiks ? (
      <h5 className='text'>3x3x3</h5>
    ) : oh ? ( 
      <h5 className='text'>3x3x3 OH</h5>
    ) : my2x2x2 ? (
      <h5 className='text'>2x2x2</h5>
    ) : my4x4x4 ? (
      <h5 className='text'>4x4x4</h5>
    ) : my5x5x5 ? (  
      <h5 className='text'>5x5x5</h5>
    ) : my6x6x6 ? (
      <h5 className='text'>6x6x6</h5>
    ) : my7x7x7 ? ( 
      <h5 className='text'>7x7x7</h5>
    ) : other ? (
      <p className="text">Cube: <input type='text' value={cube} onChange={handleUpdateCube} /></p>
    ) : (
      <div>
        <button className='buttonTimes' onClick={handleRubiks}>3x3x3</button>
        <button className='buttonTimes' onClick={handleOh}>3x3x3 OH</button>
        <button className='buttonTimes' onClick={handleMy2x2x2}>2x2x2</button>
        <button className='buttonTimes' onClick={handleMy4x4x4}>4x4x4</button>
        <button className='buttonTimes' onClick={handleMy5x5x5}>5x5x5</button>
        <button className='buttonTimes' onClick={handleMy6x6x6}>6x6x6</button>
        <button className='buttonTimes' onClick={handleMy7x7x7}>7x7x7</button>
        <button className='buttonTimes' onClick={handleOther}>Other</button>
      </div>
    )}
    <p></p>
    <button className='button-style' onClick={handleAddTime}>Add Time</button>
  </div>
}

export default App;

