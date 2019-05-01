import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal } from 'Utilites';
import Icon from './Icon';
import { Card } from './Cards';

export default class Modal extends Component {
  render() {
      const {children, toggle, on} = this.props;
    return (
     <Portal>
         { on && (
         <ModalWrapper>
            <ModalCard>
                <CloseButton><button onClick={toggle}>
                    <Icon name="close"/>
                </button></CloseButton>
                <div>{children}</div>
            </ModalCard>
            <Background onClick={toggle}/>
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
    display: flex;
    justify-content: center;
    align-items: center;
`;

// const  ModalCard = Card.extend`
const  ModalCard = styled.div`
    position: relative;
    min-width: 320px;
    z-index: 10;
    margin-bottom: 100px;
    background: white;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 2px 2px 10px rgba(0,0,0, 0.3);
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background:
`;

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.5;
`;