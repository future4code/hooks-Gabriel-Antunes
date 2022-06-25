import styled from 'styled-components';

export const Container = styled.form`
    max-width:80%;
    min-width:80%;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;

    div:nth-child(7){
        width:30%;
    }
    @media (max-width:620px){
        min-width:95%;

        div:nth-child(7){
        width:100%;
    }   
        }
`;