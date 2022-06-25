import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    min-height:25px;
    display:flex;
    align-items:flex-start;
    gap:10px;
    flex:none;

    span{
        color:rgb(255,255,255);
        font-weight:bold;
        font-size:16px  ;
        height:100%;
    }
    p{
        color:rgb(220,220,220);
        font-size:16px;
        word-wrap:wrap;
        max-width:100%;
        text-align:flex-end;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;  
        -webkit-box-orient: vertical;
}
    
`;