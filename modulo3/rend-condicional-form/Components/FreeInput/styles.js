import styled from 'styled-components';

export const Input = styled.input`
    width:100%;
    height:50px;
    background:none;
    border:none;
    padding-left:20px;
    color:white;
    font-size:20px;
    outline:none;
    border-bottom: 0.3px solid white;
    
    &:placeholder-shown{
      color:white;
    }
    &::placeholder{
        color:rgb(0,0,0,.7);
    }
`;
