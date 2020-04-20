import React, { Component } from 'react';
// import { Container } from './styles';
import {ModalComp, Title, Content, Action, Button} from "./styles"
export default class Modal extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };
  render() {
    if(!this.props.show){
        return null;
    }
    return (
        <ModalComp>
            <Title>Modal Window</Title>
                <Content>{this.props.children}</Content>
                <Action>
                    <Button onClick={this.onClose}>
                        close
                    </Button>
                </Action>
        </ModalComp>
    )
  }
}
