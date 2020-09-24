import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Select from 'react-select';
import Email from './jobTypes/email';
import SecondOption from './jobTypes/secondOption';
import ThirdOption from './jobTypes/thirdOption';

function CreateJob () {
  const [selectedJob, setSelectedJob] = useState({});
  let jobType;

  const options = [
    {value: 'email', label: 'Schedule Email', link: <Email />},
    {value: 'second-option', label: 'Second Option', link: <SecondOption />},
    {value: 'third-option', label: 'Third Option', link: <ThirdOption />}
  ]

  const handleChange = (opt) => {
    setSelectedJob({opt});
    renderJobType();
  }

  const renderJobType = () => {
    switch (selectedJob.value) {
      case 'email':
        jobType = <Email />
        break;
      case 'second-option':
        jobType = <SecondOption />
        break;
      case 'third-option':
        jobType = <ThirdOption />
        break;
      default:
        'stuff'
    }}

  return (
    <div className="select-type">
      <label htmlFor="type">Choose a job type:</label>
      <Select
        id="job-selector"
        value={selectedJob.value}
        onChange={handleChange}
        options={options}/>
      <div>
        {jobType}
        {console.log(jobType)}
      </div>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default CreateJob;
