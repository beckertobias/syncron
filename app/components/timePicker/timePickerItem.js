import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import Select from 'react-select';
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

//for styling
const theme = createMuiTheme({
  palette: {
    primary: { main: '#11cb5f' }, // Purple and green play nicely together.
    secondary: { main: purple[500] }, // This is just green.A700 as hex.
  },
});

function Minutes(props) {
  const unitStrUpperCase =
    props.unitStr[0].toUpperCase() +
    props.unitStr.substring(1, props.unitStr.length);

  const handleChange = (e) => {
    props.handler(props.unitStr, e.target.value);
  };

  //for custom
  const handleCustomChange = (opt) => {
    props.handler('custom' + unitStrUpperCase, { opt });
  };

  function showCustomMinutes() {
    if (props.unitVal === 'custom') {
      return (
        <Select
          isMulti
          id="custom-selector"
          value={props.customUnitVal.value}
          onChange={handleCustomChange}
          options={props.createCustomOptions(props.unitStr)}
        />
      );
    } else {
      return '';
    }
  }

  return (
    <div className="time-picker-item-container">
      <div className="default-minutets">
        <MuiThemeProvider theme={theme}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              {unitStrUpperCase}
            </FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender1"
              value={props.unitVal}
              onChange={handleChange}
            >
              <FormControlLabel
                value="every"
                control={<Radio />}
                label={
                  'Every ' +
                  props.unitStr[0].toUpperCase() +
                  props.unitStr.substring(1, props.unitStr.length - 1)
                }
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label={'Every 5 ' + unitStrUpperCase}
              />
              <FormControlLabel
                value="10"
                control={<Radio />}
                label={'Every 10 ' + unitStrUpperCase}
              />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label={'Select Custom ' + unitStrUpperCase}
              />
            </RadioGroup>
          </FormControl>
        </MuiThemeProvider>
      </div>
      <div className="custom-minutes">{showCustomMinutes()}</div>
    </div>
  );
}

export default Minutes;
