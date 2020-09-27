import React from 'react';
import JobItem from './jobItem';
import { Link } from "react-router-dom";

function Overview (props) {

  return (
    <div className="home">
      <nav className="nav">
        {/* <img src={require('./icon.png')} alt="logo" className="logo"></img> */}
        <p> Icon </p>
        <p> Searchbar </p>
        <Link to="/createJob">
          <button>
            Create Job
          </button>
        </Link>
      </nav>
      <div className="overview-container">
      <h1>Overview</h1>
        <div className="job-item-container">
        {props.jobs.map((job) => (
          <JobItem key={job.comment()} job={job} removeJob={(jobObj) => props.removeJob(jobObj)} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Overview;