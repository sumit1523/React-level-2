import React, { Component } from 'react';
import Portal from './Portal';
import styled from 'styled-components';

export default class Modal extends Component {
  render() {
      const {children, toggle, on} = this.props;
    return (
     <Portal>
         { on && (
         <ModalWrapper>
            <button onClick={toggle}>close</button>
            <div>{children}</div>
         </ModalWrapper>
         )}
     </Portal>
    )
  }
}

const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: teal;`

