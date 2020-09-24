import React, { useState, useEffect } from 'react';
import Nav from './components/nav';
import List from './components/list';
import model from './model';

function Application () {
  const [jobs, setJobs] = useState([]);

  useEffect (() => {
    // model.addJob()
    model.getJobs()
      .then((jobs) => setJobs(jobs))
  }, [])

  return (
    <div className="container">
      <Nav />
      <List jobs={jobs}/>
    </div>
  );
}

export default Application;
