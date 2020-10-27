import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import TimePickerList from '../timePicker/timePickerList';
import Attachment from '../attachment.js';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Email(props) {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    description: '',
    subject: '',
    content: '',
    recipient: '',
    attachmentType: 'none',
    attachmentLocation: '',
    scriptLocation: '',
    outputLocation: '',
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

  const handleChange = (e) => {
    setValue(e.target.id, e.target.value);
  };

  const handleSubmit = () => {
    //add email type to differentiate in model
    const jobObj = Object.assign({}, formValues);
    jobObj.type = 'email';
    props.addJob(jobObj);
  };

  return (
    <div className="email">
      <h2>Create your Email</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="description"
            label="description"
            value={formValues.description}
            onChange={handleChange}
          />
          <TextField
            id="subject"
            label="subject"
            value={formValues.subject}
            onChange={handleChange}
          />
          <TextField
            id="content"
            label="content"
            value={formValues.content}
            onChange={handleChange}
          />
          <TextField
            id="recipient"
            label="recipient"
            value={formValues.recipient}
            onChange={handleChange}
          />
        </div>
      </form>
      <Attachment form={formValues} handler={setValue} />
      <TimePickerList form={formValues} handler={setValue} />
      <Link to="/">
        <button id="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </Link>
    </div>
  );
}

export default Email;
