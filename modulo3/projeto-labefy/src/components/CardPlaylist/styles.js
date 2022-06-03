import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:50px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    color:white;
    border-bottom:0.5px solid grey;
    flex:none;

    
    &:hover{
        background-color:rgba(255,255,255,.1);
    }
    p{
        width:80%;
        font-size:16px;
        cursor:pointer;
        overflow:hidden;
        text-overflow: ellipsis;
        padding-left:10px;
        letter-spacing:2px;
        white-space:nowrap;
        
        &:hover{
            color:rgb(0,230,0);
            
        }
        
        
    }
    svg{
       
        transform:scale(1.5);

        &:hover{
            color:red;
            cursor: pointer;
        }
        &:active{
            transform:scale(1.3);
        }
    }
`;