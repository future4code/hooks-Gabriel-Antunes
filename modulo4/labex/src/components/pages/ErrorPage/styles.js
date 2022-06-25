import styled from 'styled-components';

export const Container = styled.div`
    min-width:100vw;
    min-height:100vh;
    color:white;  
    overflow:hidden;
    video{
        max-width:100%;
    }
    img{
        width:500px;
        position:absolute;
        left:0;
        bottom:-500px;
        animation: rocketAnimation 5s infinite;

        @keyframes rocketAnimation {
        0% {
        transform: translateY(-1200px) rotate(-920deg);
        opacity: 0;
        }
        100% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
  }
}
    }
   
`;