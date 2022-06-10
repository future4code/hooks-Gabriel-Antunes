import styled from 'styled-components';

export const Container = styled.div`
    width:95%;
    max-width:95%;
    height:80%;
    max-height:80%;
    margin-bottom:10%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    flex:none;
`;

export const Button = styled.button`
    width:70px;
    height:70px;
    border-radius:50%;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border:none;
    box-shadow:5px 5px 11px -3px rgba(0,0,0,0.76); 
    cursor:pointer;
    
    img{
        max-width:65%;
        align-self:center;
    }
   
    &:active{
        transform:scale(1.05);
    }
`;

export const ChatArea = styled.div`
    width:100%;
    height:85%;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:solid black 0.5px;
    border-radius:10px;
    overflow-y:scroll;
     scrollbar-width: none;
     -ms-overflow-style: none; 

     &::-webkit-scrollbar{
          width:0;
          height:0;
     }
`;