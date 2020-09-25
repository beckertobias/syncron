import React from 'react';
import Minutes from './minutes';

function TimePicker (props) {

  return (
    <div className="time-picker">
      <h1>Schedule your Job</h1>
      <Minutes time={props.time} handleChange={props.handleChange}/>
    </div>
  )
}


export default TimePicker;