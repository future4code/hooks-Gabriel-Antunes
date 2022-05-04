import styled from 'styled-components';

export const FormName = styled.h1`
        color:white;
        font-weight:normal;
        font-size:2.5rem;
        text-shadow:1px 1px 1px black;
        margin:20px 0;
`;

export const FirstPage = styled.form`
    width:40vw;
    min-width:400px;
    height:100vh;
    max-height:800px;
    padding:15px;
    background-color:rgb(0,0,0,.2);
    backdrop-filter: blur(8px);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:top;
    border-radius:10px;


`;

export const Inputs = styled.div`
    
    width:80%;
    height:10vh;
    padding:10px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    
`;
export const Options = styled.ul`
    width:80%;
    height:200px;
    padding:0 20px; 
    display:flex;
    flex-direction:column;
    visibility:${(props)=>(props.visible ? "Visible":"hidden")};

`;

export const Option = styled.li`
    width:100%;
    height:50px;
    list-style:none;
    font-size:20px;
    color:white;
    font-weight:normal;
    display:flex;
    align-items:center;
    padding-left:10px;
    font-weight:normal;
    text-decoration:none;
    
    &:hover{
        background-color:rgb(255,255,255,0.4);
        cursor:pointer;
    }
    &:active{
        color:rgb(180,50,14);
    }

`


