import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:15%;
    background-color:rgba(255,255,255,.2);
    display:flex;
    flex:none;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-left: 5%;
    border-bottom: 1px solid #7b7b7b;

    span{
        max-width:60%;
        overflow-x:hidden;
        text-overflow:ellipsis;
        color:white;
        font-size:18px;

    }
    audio{
        transform:scale(.8);
        max-width:50%;
    }
    svg{
        display:${(props)=>{return (props.visibility? 'block':'none')}};
        height:100%;
        width:4%;
        

        &:hover{
            background-color:red;
            cursor: pointer;
        }
        @media screen and (max-width: 720px){
        width:7%;
  }
    }
    @media screen and (max-width: 720px){
       padding:0 3px;
  }
`;
