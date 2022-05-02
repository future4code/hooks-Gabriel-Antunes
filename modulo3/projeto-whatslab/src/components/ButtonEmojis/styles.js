import styled from 'styled-components';


export const Emoji = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: relative;
  left:25%;
  font-style:bold;
  color:rgb(0,0,0,.7);

  
  &:active{
    color:var(--active-button)
  }

  @media screen and (min-width:1200px){
    left:23%;
  }
`;
