import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);
