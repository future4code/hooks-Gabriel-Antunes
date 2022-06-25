import styled from 'styled-components';

export const Container = styled.div`
    width:80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;

    @media (max-width:620px){
            width:95%;
            
        }
`;