import React from 'react';
import ListItem from './listitem';
import { Link } from "react-router-dom";

function Home (props) {
  return (
    <div className="home">
      <nav className="nav">
        {/* <img src={require('./icon.png')} alt="logo" className="logo"></img> */}
        <p> Icon </p>
        <p> Searchbar </p>
        <Link to="/createJob">
          <button>
            Create Job
          </button>
        </Link>
      </nav>
      <div className="overview-container">
      <h1>Overview</h1>
        <div className="list-item-container">
        {props.jobs.map((job) => (
          <ListItem key={job.comment()} job={job} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Home;