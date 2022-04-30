import styled from 'styled-components';

export const Container = styled.div`
    height:950px;
    max-height:100vh;
    width: 600px;
    max-width:35vw;
    min-width:400px;
    min-height:550px;
    background-color: var(--background);
    border: solid 2px var(--outline);
    border-radius:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    
`;
export const Aplication = styled.div`
    width:95%;
    height:97%;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    gap:10px;
    background-image:url(https://www.teahub.io/photos/full/70-706467_papel-de-parede-verde-whatsapp.jpg);
    background-size:cover; 
`;

export const ContainerSend = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
`;

export const User = styled.input`
  width: 15%;
  height: 30px;
  background-color: var(--input);
  border-radius: 15px;
  padding: 0 10px;
  margin-right:5px;
  
`;
export const Input = styled.input`
  width: 70%;
  height: 30px;
  background-color: var(--input);
  border-radius: 15px;
  padding: 0 8%;
  margin-right:5px;

  @media screen and (min-width: 1200px){
       padding: 0 7%;
  }
`;

export const ButtonSend = styled.button`
display:flex;
padding-left:5px;
justify-content:center;
align-items:center;
 width:30px;
 height:30px;
 border-radius:50%;
 border:none;
 background-color:var(--button);
 box-shadow: 1px 1px 1px black;
 margin-right: 25px;

 &:active{
     background-color:var(--active-button);
     transform:scale(1.1);
 }

`;

export const ContainerMessage = styled.div`
     height:90%;
     margin: 0 4% 0 4%;
     display:flex;
     flex-direction:column-reverse;
     justify-content:flex-start;
     align-items:center;
     color:white;
     border-top: 4px rgb(0,0,0,.8) ridge;
     border-bottom: .5px var(--outline) solid;
     overflow-y:scroll;
     scrollbar-width: none;
     -ms-overflow-style: none; 

     &::-webkit-scrollbar{
          width:0;
          height:0;
     }
     
`;
export const BoxMessage = styled.div`
     width:100%;
     display:flex;
     justify-content:flex-start;
     margin:5px 0;
`;

export const BoxMyMessage = styled.div`
     width:100%;
     display:flex;
     justify-content:flex-end;
     margin:5px 0;
`;

export const MyMessage = styled.div`
     max-width:70%;
     border-radius:10px;
     padding:5px 10px;
     box-shadow: 1px 1px 1px grey;
     background-color:var(--my-text-area);
    

     p{
          color:black;
     }
`;

export const Message = styled.div`
     max-width:70%;
     border-radius:10px;
     padding:5px 10px;
     box-shadow: 1px 1px 1px grey;
     background-color:var(--your-text-area);
     display:flex;
     flex-direction:column;
     gap:5px;
     p{
          color:black;
          
     }
     span{
          
          font-size:.8rem;
          font-weight:bold;
          text-align:start;
          color:black;
          
      
     }
`;



