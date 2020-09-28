import React from 'react';
const cronstrue = require('cronstrue');

function JobItem(props) {
  let cronStr = '';
  cronStr += props.job.minute().render() + ' ';
  cronStr += props.job.hour().render() + ' ';
  cronStr += props.job.dom().render() + ' ';
  cronStr += props.job.month().render() + ' ';
  cronStr += props.job.dow().render();

  const execTime = cronstrue.toString(cronStr);

  function remove() {
    props.removeJob(props.job);
  }

  return (
    <div className="job-item">
      <div className="job-item-header">
        <span id="job-item-header-text">{props.job.comment()}</span>
        <button id="trash-btn" onClick={remove}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
      <div className="execution-time">
        <p className="execution-time-header">Execution Time:</p>
        <p className="execution-time-string">{execTime}</p>
      </div>
    </div>
  );
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



    console.log(jobs[0].minute().render())
  console.log(jobs[0].hour().render())
  console.log(jobs[0].dom().render())
  console.log(jobs[0].month().render())
  console.log(jobs[0].dow().render())
  }
*/
