import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Select from 'react-select';
import Email from './jobTypes/email';
import SecondOption from './jobTypes/secondOption';
import ThirdOption from './jobTypes/thirdOption';

function CreateJob (props) {
  const [selectedJob, setSelectedJob] = useState({});

  const options = [
    {value: 'email', label: 'Schedule Email'},
    {value: 'second-option', label: 'Second Option'},
    {value: 'third-option', label: 'Third Option'}
  ]

  const handleChange = (opt) => {
    setSelectedJob({opt});
  }

  const renderJobType = () => {
    let jobType = '';
    if (selectedJob.opt) {
      switch (selectedJob.opt.value) {
        case 'email':
          jobType = <Email addJob={props.addJob} />;
          break;
        case 'second-option':
          jobType = <SecondOption addJob={props.addJob} />
          break;
        case 'third-option':
          jobType = <ThirdOption addJob={props.addJob} />
          break;
      }
    }
    return jobType;
  }

  return (
    <div className="select-type">
      <label htmlFor="type">Choose a job type:</label>
      <Select
        id="job-selector"
        value={selectedJob.value}
        onChange={handleChange}
        options={options}/>
      <div>
        {renderJobType()}
      </div>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default CreateJob;
