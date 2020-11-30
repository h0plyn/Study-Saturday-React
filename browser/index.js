import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';

console.log('Hello Webpack!');

const App = () => {
  return <Main />;
};

ReactDOM.render(<App />, document.getElementById('app'));
