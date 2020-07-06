import React from 'react';
import './App.css';
import PlotCO2 from './components/PlotCo2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Jonny's web app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I AM ALIVE
        </a>
        <div>
          <PlotCO2 />
        </div>
      </header>
    </div>
  );
}

export default App;
