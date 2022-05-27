import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:10%;
    background-color:black;
    padding:1%;
    color:white;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;

    div{
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:3px;
    }
   
`;