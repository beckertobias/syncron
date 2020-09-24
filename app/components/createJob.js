import React from 'react';
import { Link } from "react-router-dom";

function CreateJob (props) {

  return (
    <div className="select-type">
      <label for="type">Choose a job type:</label>
      <select>
        <option value="email">Scheduled Emails</option>
        <option value="otherOption">Other Option</option>
      </select>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default CreateJob;
