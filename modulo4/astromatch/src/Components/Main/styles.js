import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    max-width:500px;
    height:100vh;
    max-height:900px;
    border:2px solid black;
    border-radius:30px;
    background-color:white;
    padding:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    overflow-x:scroll;
     scrollbar-width: none;
     -ms-overflow-style: none; 

     &::-webkit-scrollbar{
          width:0;
          height:0;
     }
    
`;