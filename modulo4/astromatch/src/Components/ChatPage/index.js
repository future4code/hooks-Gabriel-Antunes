import React from "react";
import {Container, Button, ChatArea} from './styles';
import reset from '../img/astromatch-reset.png';

const ChatPage=(props)=>{
  return (
   <Container>
      <ChatArea>{props.chat}</ChatArea> 
      <Button onClick={props.onClickReset}><img src={reset} alt="Botão de reset" /></Button>
   </Container>
  );
}

export default ChatPage;