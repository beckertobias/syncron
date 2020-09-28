import React, { useState, useEffect } from 'react';
import Overview from './components/overview';
import CreateJob from './components/createJob';
import model from './model';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#11cb5f' },
    secondary: { main: purple[500] },
  },
});

function Application() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    model.getJobs().then((jobs) => setJobs(jobs));
  }, []);

  function addJob(jobObj) {
    model.addJob(jobObj).then((jobs) => setJobs(jobs));
  }

  function removeJob(jobObj) {
    model.removeJob(jobObj).then((jobs) => setJobs(jobs));
  }

  return (
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        <div className="app-container">
          <Switch>
            <Route
              path="/createJob"
              render={(props) => (
                <CreateJob
                  {...props}
                  addJob={(jobObj) => addJob(jobObj)}
                />
              )}
            />
            <Route
              path="/"
              render={(props) => (
                <Overview
                  {...props}
                  jobs={jobs}
                  removeJob={(jobObj) => removeJob(jobObj)}
                />
              )}
            />
          </Switch>
        </div>
      </MuiThemeProvider>
    </HashRouter>
  );
}

export default Application;
