import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:50%;

    @media (max-width:600px) {
        gap:25%;
    }
    
`;