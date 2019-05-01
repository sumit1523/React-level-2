import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {Toggle, Modal} from './Utilites';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          <Toggle>
            {({on, toggle})=>(
              <Fragment>
                <button onClick={toggle}>Login</button>
                  <Modal on={on} toggle={toggle}>
                    <h1>Still in Modal</h1>
                  </ Modal>
              </Fragment>
            )}
          </Toggle>     
        
      </div>
    );
  }
}

export default App;

