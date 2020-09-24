import React from 'react';
import ListItem from './listitem';

function List (props) {
  return (
    <div className="list">
      {props.jobs.map((job) => (
        <ListItem key={job.comment()} job={job} />
      ))}
    </div>
  )
}

export default List;