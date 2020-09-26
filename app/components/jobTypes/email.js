import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import TimePicker from '../timePicker/timepicker';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Email (props) {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    description: '',
    subject: '',
    content: '',
    recipient: '',
    minutes: '',
    customMinutes: [],
    hours: '',
    days: '',
    months: '',
    weekday: '',
  });

  const setValue = (key, value) => {
    //Why does this not work?
    console.log(formValues)
    //setFormValues((formValues) => (Object.assign(formValues, {description: value})))
    let newForm;
    switch(key) {
      case 'description':
        newForm = {description: value, subject: formValues.subject, content: formValues.content, recipient: formValues.recipient, minutes: formValues.minutes, customMinutes: formValues.customMinutes, hours: formValues.hours, days: formValues.days, months: formValues.months, weekday: formValues.weekday}
        break;
      case 'subject':
        newForm = {description: formValues.description, subject: value, content: formValues.content, recipient: formValues.recipient, minutes: formValues.minutes, customMinutes: formValues.customMinutes, hours: formValues.hours, days: formValues.days, months: formValues.months, weekday: formValues.weekday}
        break;
      case 'content':
        newForm = {description: formValues.description, subject: formValues.subject, content: value, recipient: formValues.recipient, minutes: formValues.minutes, customMinutes: formValues.customMinutes, hours: formValues.hours, days: formValues.days, months: formValues.months, weekday: formValues.weekday}
        break;
      case 'recipient':
        newForm = {description: formValues.description, subject: formValues.subject, content: formValues.content, recipient: value, minutes: formValues.minutes, customMinutes: formValues.customMinutes, hours: formValues.hours, days: formValues.days, months: formValues.months, weekday: formValues.weekday}
        break;
      case 'minutes':
        newForm = {description: formValues.description, subject: formValues.subject, content: formValues.content, recipient: formValues.recipient, minutes: value, customMinutes: formValues.customMinutes, hours: formValues.hours, days: formValues.days, months: formValues.months, weekday: formValues.weekday}
        break;
      case 'customMinutes':
        newForm = {description: formValues.description, subject: formValues.subject, content: formValues.content, recipient: formValues.recipient, minutes: formValues.minutes, customMinutes: value, hours: formValues.hours, days: formValues.days, months: formValues.months, weekday: formValues.weekday}
        break;
    }
    setFormValues(newForm)
  }

  const handleChange = (e) => {
    console.log(e.target.id)
    setValue(e.target.id, e.target.value)
  };

  const handleSubmit = () => {
    //add email type to differentiate in model
    const jobObj = Object.assign({}, formValues);
    jobObj.type = 'email';
    console.log('jobObj', jobObj)
    props.addJob(jobObj);
  }

  return (
    <div className="email">
      <h1>Input Email specs</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField id="description" label="description" value={formValues.description} onChange={handleChange} />
          <TextField id="subject" label="subject" value={formValues.subject} onChange={handleChange} />
          <TextField id="content" label="content" value={formValues.content} onChange={handleChange} />
          <TextField id="recipient" label="recipient" value={formValues.recipient} onChange={handleChange} />
        </div>
      </form>
      <TimePicker form={formValues} handler={setValue} />
      <button id="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Email;


//command: subject, content, recipient
//comment: description
//time: time picker


/*
Pass command, comment and time up to app
*/

/*
Logic:
Find Job by (command and) comment
comment will be description at the same time
when creating new job, have to check whether job with same command and comment already exists
*/

/*
import React from 'react';
import { useForm } from 'react-hook-form';
import TimePicker from '../timePicker/timepicker';

function Email (props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const jobObj = {};
    jobObj.command = `echo "${data.content}" | mail -s "${data.subject}" ${data.recipient}`
    jobObj.comment = data.description;
    props.addJob(jobObj);
  }

  return (
    <div className="email">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="description" ref={register} />
        <input name="subject" ref={register} />
        <input name="content" ref={register} />
        <input name="recipient" ref={register} />
        <button>Submit</button>
      </form>
      <TimePicker />
    </div>
  )
}

export default Email;
*/