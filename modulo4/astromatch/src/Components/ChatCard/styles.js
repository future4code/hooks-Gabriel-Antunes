import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:15%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    border-bottom:solid #b7b7b7 0.5px; 
    flex:none;
    padding:0 20px;
    cursor:pointer;

    img{
        width:50px;
        height:50px;
        border-radius:50%;
        size:cover;
        border:0.5px black solid;
    }
    h3{
        width:80%;
        text-align:end;
        color:#03989e;
    }

    &:hover{
        background-color:rgba(0,0,0,.1);
    }
  
`;