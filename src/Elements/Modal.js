import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal } from 'Utilites';
import Icon from './Icon';
import { Card } from './Cards';
import { elevation, transition, teal, absolute } from 'Utilites';


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
    ${absolute({})};
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
    color: ${teal};
    ${elevation[4]};
    ${transition({
        ease: 'ease-in',
        length: '1s'
    })};

    &:hover{
        ${elevation[5]};
    }
`;

const CloseButton = styled.button`
    border: none;
    background: transparent;
    ${absolute({
        y: 'top',
        x: 'right'
    })};
`;

const Background = styled.div`
    ${absolute({})};
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
`;