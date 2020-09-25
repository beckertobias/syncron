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