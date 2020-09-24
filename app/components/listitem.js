import React from 'react';

function ListItem (props) {
  return (
    <div>
      <p>name: {props.job.comment()}</p>
      <p>preview: {props.job.toString()}</p>
      <p>hour: </p>
    </div>
  )
}

export default ListItem;


/*
CronJob {
    isValid: [Function],
    render: [Function],
    clear: [Function],
    minute: [Function],
    hour: [Function],
    dom: [Function],
    month: [Function],
    dow: [Function],
    command: [Function],
    comment: [Function],
    toString: [Function]
  }
*/
