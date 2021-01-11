// App.js (client)
import React from 'react';
import { addName } from "./util";


function App() {
  const [name, setName] = React.useState("")

  function handleUpdate(evt) {
    setName(evt.target.value);
  }

  async function handleAddName(evt) {
    await addName(name);
  }

  return <div>
    <p><input type='text' value={name} onChange={handleUpdate} /></p>
    <button className='button-style' onClick={handleAddName}>Add Name</button>
  </div>
}

export default App;

