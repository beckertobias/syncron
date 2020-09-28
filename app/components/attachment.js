import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
const { ipcRenderer } = require('electron');

function Attachment(props) {
  //Talk to Main Process
  const showFileDialog = (key) => {
    ipcRenderer.send('request-mainprocess-action', 'hi');
    ipcRenderer.on('mainprocess-response', (event, arg) => {
      props.handler(key, arg[0]);
    });
  };

  const handleChange = (e) => {
    props.handler('attachmentType', e.target.value);
  };

  function showAttachmentForm() {
    if (props.form.attachmentType === 'select') {
      return (
        <div className="attachment-form">
          <button
            id="attachment-input"
            onClick={() => showFileDialog('attachmentLocation')}
          >
            Select file path
          </button>
          <p>You Selected: {props.form.attachmentLocation}</p>
        </div>
      );
    } else {
      return '';
    }
  }

  function showScriptForm() {
    if (props.form.attachmentType === 'execute-script') {
      return (
        <div className="attachment-script-form">
          <div className="attachment-script">
            <button
              id="script-input"
              onClick={() => showFileDialog('scriptLocation')}
            >
              Select script path
            </button>
            <p>You Selected: {props.form.scriptLocation}</p>
          </div>
          <div className="attachment-output">
            <button
              id="script-input"
              onClick={() => showFileDialog('outputLocation')}
            >
              Select script path
            </button>
            <p>You Selected: {props.form.outputLocation}</p>
          </div>
        </div>
      );
    } else {
      return '';
    }
  }

  return (
    <div className="attachment-container">
      <div className="attachment-selector">
        <h2>Select an Attachment</h2>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="gender"
            name="gender1"
            value={props.form.attachmentType}
            onChange={handleChange}
          >
            <FormControlLabel
              value="none"
              control={<Radio />}
              label={'No Attachment'}
            />
            <FormControlLabel
              value="select"
              control={<Radio />}
              label={'Select Attachment'}
            />
            <FormControlLabel
              value="execute-script"
              control={<Radio />}
              label={'Execute Script and send Output as attachment'}
            />
          </RadioGroup>
        </FormControl>
      </div>
      {showAttachmentForm()}
      {showScriptForm()}
    </div>
  );
}

export default Attachment;
