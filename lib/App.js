// App.js (client)
import React from 'react';
import { addTime } from "./util";

function App() {
  const [name, setName] = React.useState("")
  const [time, setTime] = React.useState("")

  function handleUpdate(evt) {
    setName(evt.target.value);
  }

  function handleUpdateTime(evt) {
    setTime(evt.target.value);
  }

  async function handleAddTime(evt) {
    await addTime(name,time);
    alert("Added!");
  }

  return <div>
    <p><input type='text' value={name} onChange={handleUpdate} /></p>
    <p><input type='text' value={time} onChange={handleUpdateTime} /></p>
    <button className='button-style' onClick={handleAddTime}>Add Time</button>
  </div>
}

export default App;

