import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:12%;
    display:flex;
    flex-direction:row;
    justify-content:space-around; 
    align-items:flex-start;
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
    box-shadow:1px 2px 8px -3px rgba(0,0,0,0.76); 
    cursor:pointer;
    outline:none;
    
    img{
        max-width:65%;
    }
    &:nth-child(1) img{
            transform:scale(.8);
    }
    &:nth-child(2){
        transform:scale(.9);
        align-self:flex-end;
    }
    &:nth-child(2) img{
        transform:scale(1.2);
    }

    &:active{
        transform:scale(1.05);
    }
`;