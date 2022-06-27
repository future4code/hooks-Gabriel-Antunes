import React from "react";
import {Container} from './styles';
import backgroundImg from '../../assets/img/404-background.png'

const ErrorPage=()=>{
 
  return (
   <Container>
       <img src={backgroundImg} alt="Error"/>
   </Container>
  );
}

export default ErrorPage;