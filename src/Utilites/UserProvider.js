import React, { Component } from 'react'
import  { UserContext } from './UserContext';

export default class UserProvider extends Component {
    state = {
      id: '123',
      name: "sumit",
      email: "sumit1523@gmail.com"
    };
  
    logout = () => {
      this.setState({
        id: '',
        name: '',
        email: ''
      })
    }
  
    render() {
      return (
        <UserContext.Provider value = {{
          user: this.state,
          logout: this.logout
        }}>
          {this.props.children}
        </UserContext.Provider>
      );
      
    }
  }