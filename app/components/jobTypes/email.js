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
  const [valueObj, setValueObj] = useState({
    description: '',
    subject: '',
    content: '',
    recipient: '',
    minutes: '',
    hours: '',
    days: '',
    months: '',
    weekday: '',
  });

  const setValue = (key, value) => {
    setValueObj((objVal) => (Object.assign(objValue, {[key]: value})))
  }

  const handleChange = (e) => {
    setValue(e.target.id, e.target.value)
  };

  const handleSubmit = () => {
    //get values from value Obj and put to jobObj. Alternatively just pass everything and handle in model.
    const jobObj = {};
    jobObj.command = `echo "${data.content}" | mail -s "${data.subject}" ${data.recipient}`
    jobObj.comment = data.description;
    props.addJob(jobObj);
  }

  return (
    <div className="email">
      <h1>Input Email specs</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField id="description" label="description" value={valueObj.description} onChange={handleChange} />
          <TextField id="subject" label="subject" value={valueObj.subject} onChange={handleChange} />
          <TextField id="content" label="content" value={valueObj.content} onChange={handleChange} />
          <TextField id="recipient" label="recipient" value={valueObj.recipient} onChange={handleChange} />
        </div>
      </form>
      <TimePicker time={valueObj.minutes} handleChange={setValue} />
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