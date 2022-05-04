import styled from 'styled-components';

export const Btn = styled.button`
    width:70px;
    height:35px;
    border:none;
    background-color:white;
    color:black;
    border-radius:20px;
    cursor: pointer;


    &:hover{
        background-color: rgb(180,50,14);
        transform:scale(1.1);
    }
`;