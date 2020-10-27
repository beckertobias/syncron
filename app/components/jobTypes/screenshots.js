import React, { useState } from 'react';
import TimePickerList from '../timePicker/timePickerList';

function Screenshots(props) {
  const [formValues, setFormValues] = useState({
    description: '',
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
    jobObj.type = 'screenshots';
    jobObj.description = 'Screenshot Organizer';
    props.addJob(jobObj);
  };

  return (
    <div className="screenshots">
      <TimePickerList form={formValues} handler={setValue} />
      <button id="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Screenshots;
