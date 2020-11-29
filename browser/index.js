import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Main from './components/main';

console.log('Hello Webpack!');

const App = () => {
  render() {
    <Main />
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

