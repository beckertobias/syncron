import React from 'react';
import Minutes from './minutes';

function TimePicker (props) {

  return (
    <div className="time-picker">
      <h1>Schedule your Job</h1>
      <Minutes minutes={props.form.minutes} customMinutes={props.form.customMinutes} handler={(key, value) => props.handler(key, value)}/>

    </div>
  )
}


export default TimePicker;