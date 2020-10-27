import React, { useState } from 'react';
import TimePickerList from '../timePicker/timePickerList';
import TextField from '@material-ui/core/TextField';

function Custom(props) {
  const [formValues, setFormValues] = useState({
    description: '',
    command: '',
    minutes: 'every',
    customMinutes: [],
    hours: 'every',
    customHours: [],
    days: 'every',
    customDays: [],
    months: 'every',
    customMonths: [],
    weekdays: 'every',
    customWeekdays: [],
  });

  const setValue = (key, value) => {
    setFormValues((formValues) => {
      return Object.assign({}, formValues, {[key]: value})
    });
  };

  const handleSubmit = () => {
    //add email type to differentiate in model
    const jobObj = Object.assign({}, formValues);
    jobObj.type = 'custom';
    props.addJob(jobObj);
  };

  const handleChange = (e) => {
    setValue(e.target.id, e.target.value);
  };

  return (
    <div className="custom-command">
      <div className="custom-command-input">
        <TextField
          id="description"
          label="Your Description"
          value={formValues.description}
          onChange={handleChange}
        />
        <TextField
          id="command"
          label="Your Command"
          value={formValues.command}
          onChange={handleChange}
        />
      </div>
      <TimePickerList form={formValues} handler={setValue} />
      <button id="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Custom;
