import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:10%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:0 10px;
    

    img:nth-child(1){
        max-height:5vh;
        cursor:pointer; 
    &:active{
        transform:scale(1.15)
    } 
    }
    img:nth-child(2){
        max-height:5vh;
        max-width:65%;
    }
    img:nth-child(3){
        max-height:5vh;
        cursor:pointer;
    &:active{
        transform:scale(1.15)
    }    
    }
    @media (max-width: 600px) {
    padding:0;
    height:5%;
  }
`;
