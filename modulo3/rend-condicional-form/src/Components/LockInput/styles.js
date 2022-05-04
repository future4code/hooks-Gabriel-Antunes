import styled from 'styled-components';


export const Input = styled.div`
    width:100%;
    height:50px;
    background:none;
    border:none;
    padding:0 20px;
    color:white;
    font-size:20px;
    outline:none;
    border-bottom: 0.3px solid white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    &:hover{
        cursor:pointer;
    }

    svg{
        color:white;
        width:35px;
        height:auto;
    }

    &:hover svg, &:hover p{
        color:rgb(180,50,14);
        cursor:pointer;
    }
    &:active svg{
        transform:scale(1.1);
    }
    &:active p{
        transform:scale(1.05);
    }
    p{
        font-size:20px;
        color:rgb(0,0,0,.7);
    }
   
`;


