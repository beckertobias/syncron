import React from 'react';
import TimePickerItem from './timePickerItem';

function TimePicker(props) {
  const units = ['minutes', 'hours', 'days', 'months', 'weekdays'];
  const monthStrings = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const weekdayStrings = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];

  function createCustomOptions(unit) {
    const options = [];
    switch (unit) {
      case units[0]:
        for (let i = 1; i < 60; i++) {
          options.push({ value: i.toString(), label: i.toString() });
        }
        break;
      case units[1]:
        options.push({ value: 'Midnight', label: 'Midnight' });
        for (let i = 1; i < 24; i++) {
          options.push({ value: i.toString(), label: i.toString() });
        }
        break;
      case units[2]:
        for (let i = 1; i < 29; i++) {
          options.push({ value: i.toString(), label: i.toString() });
        }
        break;
      case units[3]:
        for (let i = 1; i <= monthStrings.length; i++) {
          options.push({
            value: i.toString(),
            label: monthStrings[i - 1],
          });
        }
        break;
      case units[4]:
        for (let i = 0; i < weekdayStrings.length; i++) {
          options.push({
            value: i.toString(),
            label: weekdayStrings[i],
          });
        }
        break;
    }
    return options;
  }

  return (
    <div className="time-picker">
      <h2>Schedule your Task</h2>
      {units.map((el) => (
        <TimePickerItem
          key={el}
          unitStr={el}
          unitVal={props.form[el]}
          customUnitVal={
            props.form[
              'custom' +
                el[0].toUpperCase() +
                el.substring(1, el.length)
            ]
          }
          handler={(key, value) => props.handler(key, value)}
          createCustomOptions={createCustomOptions}
        />
      ))}
    </div>
  );
}

export default TimePicker;
