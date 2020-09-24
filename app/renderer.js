import React from 'react';
import { render } from 'react-dom';

function Application () {
  return (
    <div className="container">
      <h1>hi</h1>
      <header className="controls">
      </header>
    </div>
  );
}

render(<Application />, document.getElementById('application'));
