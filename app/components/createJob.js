import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Select from 'react-select';
import Email from './jobTypes/email';
import SecondOption from './jobTypes/secondOption';
import ThirdOption from './jobTypes/thirdOption';

function CreateJob (props) {
  const [selectedJob, setSelectedJob] = useState({});

  const options = [
    {value: 'email', label: 'Schedule Email', link: <Email />},
    {value: 'second-option', label: 'Second Option', link: <SecondOption />},
    {value: 'third-option', label: 'Third Option', link: <ThirdOption />}
  ]

  const handleChange = (opt) => {
    setSelectedJob({opt});
  }

  const renderSelectedJob = () => {
    return selectedJob.opt ? selectedJob.opt.link : ''
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
        {renderSelectedJob()}
      </div>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default CreateJob;
