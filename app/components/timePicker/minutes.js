import React, { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio }  from '@material-ui/core';
import Select from 'react-select';

function Minutes (props) {

  const handleChange = (e) => {
    props.handler('minutes', e.target.value)
  };

  //for custom minutes
  const handleCustomChange = (opt) => {
    props.handler('customMinutes', {opt})
  }

  function createOptions () {
    const options = [];
    for (let i = 1; i < 60; i++) {
      options.push({value: i.toString(), label: i.toString()})
    }
    return options;
  }

  function showCustomMinutes () {
    if (props.minutes === 'custom') {
      return (
        <Select
          isMulti
          id="custom-minute-selector"
          value={props.customMinutes.value}
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
          <RadioGroup row aria-label="gender" name="gender1" value={props.minutes} onChange={handleChange}>
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

