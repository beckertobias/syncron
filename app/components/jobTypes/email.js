import React from 'react';
import { useForm } from 'react-hook-form';

function Email (props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="email">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="subject" ref={register} />
        <input name="content" ref={register} />
        <input name="recipient" ref={register} />
        <button>Submit</button>
      </form>
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