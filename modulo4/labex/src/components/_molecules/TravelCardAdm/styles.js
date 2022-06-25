import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 20px;
    cursor:pointer;
    background-color:rgba(0,0,0,.35);

    h3{
        color:rgb(255,255,255);
        font-size:20px;
        max-width:90%;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:1;
        -webkit-box-orient:vertical;

    }
    svg{
        width:25px;
        height:25px;
        color:rgb(255,255,255);
        &:hover{
            color:rgb(255,0,0);
        }
        &:active{
            transform:scale(1.15);
        }
    }
`;