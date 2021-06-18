import React, { useState } from 'react';
import Popup from '../components/popup';
 
function PopupApp() {
  const [isOpen, setIsOpen] = useState(false);
  // const [hasSeen, setHasSeen] = useState(false); maybe call this on index

  const componentDidMount = () => {
    this.togglePopup();
  }
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  // &ensp;
  return <div>

    <p className='text'>To learn how to use the site click below.</p>
    <input type="button" value="About" onClick={togglePopup} />

    {isOpen && <Popup
      content={<>
      <p className="text" align='left'> This website allows users to time themselves when solving the Rubik's cube. To start/stop the stopwatch, press the start/stop button or use the <b>spacebar</b>. The timer restarts at <b>0</b> every time the program is run and each old time will be added to the <b>Last Time</b> box. To clear all times, press the <b>clear button</b> or <b>c</b>. To delete the last time, press the <b>delete button</b> or <b>d</b>. The program will find a few things: the average of all the times; the fastest time; the slowest time; and, the range between the fastest and slowest time. If you leave the site, your times will be saved and they will load the next time you visit. Lastly, to add your best time for various cubes to a public list and see other people's times, <a className="link" href="http://www.acubestory.com/times">click here</a>!</p>
        <button onClick={togglePopup}>Close</button>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
 
export default PopupApp;