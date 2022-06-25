import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:240px;
    background-color:rgba(0,0,0,.7);
    border-radius:10px;
    padding:20px;
    gap:5px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    box-shadow: 5px 5px 15px black;
    

    &:hover{
        div button{
                filter:opacity(100%);
            }
    }
`;

export const CandidateButtons  =styled.div`
    margin-top:20px;
    display:flex;
    align-items:center;
    gap:40%;
    

    button{
        filter:opacity(30%);
    }
    @media (max-width:620px){
            gap:15%;
            padding:0 1%;
        }
`;