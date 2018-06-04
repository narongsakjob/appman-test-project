import React from 'react'
import ReactDOM from 'react-dom';

// Components
import Blog from './container/blog'

const App = () => {
  return (
    <center>
      <h1> Hello Landing page </h1>
      <Blog/>
    </center>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('.root'));