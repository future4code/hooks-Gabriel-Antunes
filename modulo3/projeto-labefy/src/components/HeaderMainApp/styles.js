import styled from 'styled-components';

export const Container = styled.div`
    width:100%;  
    height:10%;
    background-color:black;
    padding:1%;
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    

    p{
        white-space:nowrap;
        max-width:35%;
        overflow-x:hidden;
        text-overflow:ellipsis;
    }
    div{
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:10px;
    }
    input{
        width:20%;
        background-color:rgba(255,255,255,.3);
        height:30px;
        max-height:80%;
        border-radius:15px;
        border:none;
        outline:none;
        padding: 0 2%;
        color:white;
        &::placeholder{
            color:rgb(25,25,25);
        }
    }
    button{
        max-height:100%;
        flex:none;
        padding:5px;
        margin-left:5px;
        background-color:transparent;
        color:white;
        border:none;
        cursor:pointer;
        border-radius:10px;
        border:0.2px #7b7b7b solid;

        &:hover{
            background-color:rgba(255,255,255,.1);
        }
        &:active{
            background-color:rgb(0,230,0);
        }
    }
`;