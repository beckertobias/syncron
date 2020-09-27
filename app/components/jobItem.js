import React from 'react';

function JobItem (props) {

  function remove () {
    props.removeJob(props.job)
  }

  return (
    <div className="job-item">
      <div className="job-item-header">
        <span id="job-item-header-text">{props.job.comment()}</span>
        <button id="trash-btn" onClick={remove}><i className="fa fa-trash"></i></button>
      </div>
      <p className="item-details">preview: {props.job.toString()}</p>
      <p className="item-details">hour: {}</p>
    </div>
  )
}

export default JobItem;


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
