import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Email from './jobTypes/email';
import Screenshots from './jobTypes/screenshots';
import Custom from './jobTypes/custom';

function CreateJob(props) {
  const [selectedJob, setSelectedJob] = useState({});

  const options = [
    { value: 'email', label: 'Schedule Email' },
    { value: 'screenshots', label: 'Screenshot Organizer' },
    { value: 'custom', label: 'Custom Command' },
  ];

  const handleChange = (opt) => {
    setSelectedJob({ opt });
  };

  const renderJobType = () => {
    let jobType = '';
    if (selectedJob.opt) {
      switch (selectedJob.opt.value) {
        case 'email':
          jobType = (
            <Email addJob={(jobObj) => props.addJob(jobObj)} />
          );
          break;
        case 'screenshots':
          jobType = <Screenshots addJob={props.addJob} />;
          break;
        case 'custom':
          jobType = <Custom addJob={props.addJob} />;
          break;
      }
    }
    return jobType;
  };

  return (
    <div className="create-job-container">
      <nav className="nav">
        <img
          id="logo"
          src="https://www.iconfinder.com/data/icons/time-and-callander/32/2_refresh_sync_recycle_clock_time_alarm_watch-512.png"
        ></img>
        <h1>CronWizard</h1>
        <Link to="/">
          <button>Back to Task Overview</button>
        </Link>
      </nav>
      <div className="create-job-inputs">
        <label htmlFor="type">Choose a job type:</label>
        <Select
          id="job-selector"
          value={selectedJob.value}
          onChange={handleChange}
          options={options}
          theme={(theme) =>
            Object.assign(theme, {
              colors: Object.assign(theme.colors, {
                primary25: '#c8a2c8',
                primary50: '#c8a2c8',
                primary75: '#c8a2c8',
                primary: '#11cb5f',
              }),
            })
          }
        />
        <div className="job-type-inputs">{renderJobType()}</div>
      </div>
    </div>
  );
}

export default CreateJob;

/*
colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  */
