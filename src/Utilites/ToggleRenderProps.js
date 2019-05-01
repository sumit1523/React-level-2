import React, { Component } from 'react'

export default class Toggle extends Component {
    state = {
        on: false,
    }

    toggle =()=>{
        this.setState({
            on: !this.state.on
        })
    }
  render() {
      const {display} = this.props;

    return (
        // <div>{display('Hello sumit')}</div>
        <div>
            {display({
                on:this.state.on,
                toggle: this.toggle
            })}
        </div>
    )
  }
}
