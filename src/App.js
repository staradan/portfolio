import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App App-header">
      <h1>Hi! My name is <span className="red">Daniel Stara.</span></h1>
      <p>
        I am a developer <span className="red">(love UI/UX)</span>, college student,
        bullpen catcher, and avid podcast consumer. Here are some of my projects.
      </p>
      <div className="flex-container">
        <a className="inline" href="https://statpracticetwo.web.app">
          <h4>UNL Baseball Practice Stats</h4>
        </a>
        <a className="inline" href="https://statpracticetwo.web.app">
          <h4>David City Barber Shop</h4>
        </a>
        <a className="inline" href="https://statpracticetwo.web.app">
          <h4>UNL Food Delivery</h4>
        </a>
      </div>
    </div>
  );
}

export default App;
