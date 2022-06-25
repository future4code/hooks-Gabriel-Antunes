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
        padding:0 5%;
        gap:15%;
        width:100%;
        min-height:40px;
        display:flex;
        justify-content:space-between;

        @media (max-width:620px){
            gap:5%;
            padding:0 1%;
        }


        
    }
`;