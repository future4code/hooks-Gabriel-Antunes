import React from "react";
import {Container} from './styles';
import background from '../../assets/videos/404-video.mp4';
import rocket from '../../assets/img/rocket.png';

const ErrorPage=()=>{
 
  return (
   <Container>
       <video 
       src={background} 
       type="video/mp4" 
       muted 
       autoPlay 
       loop></video>
       <img src={rocket} alt="rocket" />
   </Container>
  );
}

export default ErrorPage;