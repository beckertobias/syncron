import React from 'react';
import ListItem from './listitem';
import { Link } from "react-router-dom"

function Home (props) {
  return (
    <div className="home">
      <nav className="nav">
        <Link to="/createJob">Create Job</Link>
      </nav>
      <div className="list-item-container">
        {props.jobs.map((job) => (
          <ListItem key={job.comment()} job={job} />
        ))}
      </div>
    </div>
  )
}

export default Home;