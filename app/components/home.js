import React from 'react';
import ListItem from './listitem';
import { Link } from "react-router-dom"
//mport logo from '../assets/sync-symbol.svg';

function Home (props) {
  return (
    <div className="home">
      <nav className="nav">
        {/* <img src={logo} alt="logo" className="logo"></img> */}
        <p> Icon ? </p>
        <p> Searchbar </p>
        <Link to="/createJob">
          <button>
            Create Job
          </button>
        </Link>
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