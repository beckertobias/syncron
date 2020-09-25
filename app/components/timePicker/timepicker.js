import React, { useState } from 'react';
import Minutes from './minutes';

function TimePicker (props) {
  //const [minute, setMinute] = useState('every');

  return (
    <div className="time-picker">
      <h1>Schedule your Job</h1>
      <Minutes />
    </div>
  )
}


export default TimePicker;