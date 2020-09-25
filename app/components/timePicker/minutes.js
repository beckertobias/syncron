import React, { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio }  from '@material-ui/core';
import Select from 'react-select';

function Minutes (props) {
  //for default minutes
  const [minute, setMinute] = useState('every');

  const handleChange = (e) => {
    setMinute(e.target.value);
  };

  //for custom minutes
  const [customMinutes, setCustomMinutes] = useState({})

  const handleCustomChange = (opt) => {
    setCustomMinutes({opt});
  }

  function createOptions () {
    const options = [];
    for (let i = 1; i < 60; i++) {
      options.push({value: i.toString(), label: i.toString()})
    }
    return options;
  }

  function showCustomMinutes () {
    if (minute === 'custom') {
      return (
        <Select
          id="custom-minute-selector"
          value={customMinutes.value}
          onChange={handleCustomChange}
          options={createOptions()}
        />
      )
    } else {
      return '';
    }
  }

  return (
      <div className="minutes">
        <div className="default-minutets">
          <FormControl component="fieldset">
          <FormLabel component="legend">Minutes</FormLabel>
          <RadioGroup row aria-label="gender" name="gender1" value={minute} onChange={handleChange}>
            <FormControlLabel value="every" control={<Radio />} label="Every Minute" />
            <FormControlLabel value="5" control={<Radio />} label="Every 5 Minutes" />
            <FormControlLabel value="15" control={<Radio />} label="Every 15 Minutes" />
            <FormControlLabel value="30" control={<Radio />} label="Every 30 Minutes" />
            <FormControlLabel value="custom" control={<Radio />} label="Select Custom Minutes" />
          </RadioGroup>
          </FormControl>
        </div>
        <div className="custom-minutes">
          {showCustomMinutes()}
        </div>
      </div>
  )
}

export default Minutes;

