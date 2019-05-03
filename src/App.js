import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle } from 'Utilites';
import { Modal } from 'Elements';
import User from './Utilites/User';
import  UserProvider  from './Utilites/UserProvider';

class App extends Component {
  render() {
    return (
      <UserProvider>
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
        <User />
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
      </UserProvider>
    );
  }
}

export default App;

