import React from "react";
import {Container, Button} from './styles';
import like from '../img/astromatch-like.png';
import dislike from '../img/astromatch-dislike.png';
import reset from '../img/astromatch-reset.png';

const Footer=(props)=>{
  return (
   <Container>
       <Button onClick={props.onClickDisLike}><img src={dislike} alt="botão de deslike" /></Button>
       <Button onClick={props.onClickReset}><img src={reset} alt="Botão de reset" /></Button>
       <Button onClick={props.onClickLike}><img src={like} alt="botão de like" /></Button>
   </Container>
  );
}

export default Footer;