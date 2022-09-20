import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App App-header">
      <h1>Hi! My name is Daniel Stara</h1>
      <p>
        I am a full-stack developer fired up by innovative design and rapid product development.
      </p>
      <p>
        In my spare time I'm a college student,
        bullpen catcher, and pickup basketball MVP. Here are some of my projects.
      </p>
      <div className="flex-container">
        <a className="inline" href="https://tappsports.com">
          <h4>Tapp sports</h4>
        </a>
        <a className="inline" href="https://pitchx.netlify.com">
          <h4>Husker baseball pitch by pitch</h4>
        </a>
        <a className="inline" href="https://unlfd.netlify.com">
          <h4>UNL Food Delivery</h4>
        </a>
      </div>
    </div>
  );
}

export default App;
