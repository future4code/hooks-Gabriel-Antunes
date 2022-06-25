import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    min-height:80px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;

    h1{
        color:white;
    }
    
    div{
        gap:10%;
        width:100%;
        min-height:40px;
        display:flex;
        justify-content:space-around;

        @media (max-width:620px){
            gap:5%;
        }


        
    }

`;