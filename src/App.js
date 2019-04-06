import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRenderProps.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* <Toggle display= {greetings=>(
            <div>
              <h1>{greetings}</h1>
              <button >Show/Hide</button>
            </div>
          )}
          /> */}

          <Toggle display= {({on,toggle})=>(
            <div>
              {on && <h1>Show Me</h1>}
              <button onClick={toggle}>Show/Hide</button>
            </div>
          )}
          />

          <Toggle display= {({on,toggle})=>(
            <div>
              {on && <nav>nav item</nav>}
              <button onClick={toggle}>Menu</button>
            </div>
          )}
          />
        </header>
      </div>
    );
  }
}

export default App;

