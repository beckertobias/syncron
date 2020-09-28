import React from 'react';
import JobItem from './jobItem';
import { Link } from 'react-router-dom';

function Overview(props) {
  return (
    <div className="home">
      <nav className="nav">
        <img
          id="logo"
          src="https://www.iconfinder.com/data/icons/time-and-callander/32/2_refresh_sync_recycle_clock_time_alarm_watch-512.png"
        ></img>
        <h1>CronWizard</h1>
        <Link to="/createJob">
          <button>Create Job</button>
        </Link>
      </nav>
      <div className="overview-container">
        <h2>Task Overview</h2>
        <div className="job-item-container">
          {props.jobs.map((job) => (
            <JobItem
              key={job.comment()}
              job={job}
              removeJob={(jobObj) => props.removeJob(jobObj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
