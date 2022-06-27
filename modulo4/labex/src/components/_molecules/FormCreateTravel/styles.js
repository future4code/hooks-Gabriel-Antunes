import styled from 'styled-components';

export const Container = styled.form`
    width:80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;

    div:nth-child(6){
        width:40%;
    }
    @media (max-width:620px){
        min-width:95%;

        div:nth-child(6){
        width:100%;
    }   
        }    
`;