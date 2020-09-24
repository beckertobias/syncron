import React from 'react';
import ListItem from './listitem';
import { Link } from "react-router-dom"

function Home (props) {
  return (
    <div className="home">
      <h1>home component</h1>
      <nav>
        <Link to="/createJob">Create Job</Link>
      </nav>
      {props.jobs.map((job) => (
        <ListItem key={job.comment()} job={job} />
      ))}
    </div>
  )
}

export default Home;