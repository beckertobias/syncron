import React, { useState } from 'react';
import TimePickerList from '../timePicker/timePickerList';

function Screenshots(props) {
  const [formValues, setFormValues] = useState({
    description: '',
    minutes: 'every',
    customMinutes: [],
    hours: 'every',
    customHours: [],
    days: 'every',
    customDays: [],
    months: 'every',
    customMonths: [],
    weekdays: 'every',
    customWeekdays: [],
  });

  const setValue = (key, value) => {
    //Why does this not work?
    //setFormValues((formValues) => (Object.assign(formValues, {description: value})))
    let newForm;
    switch (key) {
      case 'description':
        newForm = {
          description: value,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'minutes':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: value,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'customMinutes':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: value,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'hours':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: value,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'customHours':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: value,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'days':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: value,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'customDays':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: value,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'months':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: value,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'customMonths':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: value,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'weekdays':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: value,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'customWeekdays':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: value,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      default:
        console.log(
          'something went wrong - no key found in switch statement',
        );
        break;
    }
    setFormValues(newForm);
  };

  const handleSubmit = () => {
    //add email type to differentiate in model
    const jobObj = Object.assign({}, formValues);
    jobObj.type = 'screenshots';
    jobObj.description = 'Screenshot Organizer';
    props.addJob(jobObj);
  };

  return (
    <div className="screenshots">
      <TimePickerList form={formValues} handler={setValue} />
      <button id="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Screenshots;
