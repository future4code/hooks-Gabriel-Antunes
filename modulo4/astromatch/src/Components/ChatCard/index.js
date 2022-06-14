import React from "react";
import {Container} from './styles';

const ChatCard=(props)=>{
  return (
   <Container>
        <img src={props.photo} alt={props.alt} />
        <h3>{props.name}</h3>
   </Container>
  );
}

export default ChatCard;