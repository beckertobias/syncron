import React, { useState, useEffect } from 'react';
import Overview from './components/overview';
import CreateJob from './components/createJob'
import model from './model';
import { HashRouter, Route, Switch } from 'react-router-dom';

function Application () {
  const [jobs, setJobs] = useState([]);

  useEffect (() => {
    model.getJobs()
      .then((jobs) => setJobs(jobs))
  }, [])

  function addJob (jobObj) {
    model.addJob(jobObj)
      .then((jobs) => setJobs(jobs))
  }

  function removeJob (jobObj) {
    model.removeJob(jobObj)
      .then((jobs => setJobs(jobs)))
  }

  return (
    <HashRouter>
      <div className="app-container">
        <Switch>
          <Route
            path='/createJob'
            render={(props) => (
              <CreateJob {...props} addJob={(jobObj) => addJob(jobObj)}/>
            )}
          />
          <Route
            path='/'
            render={(props) => (
              <Overview {...props} jobs={jobs} removeJob={(jobObj) => removeJob(jobObj)}/>
            )}
          />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default Application;
