import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-size:14px;
}
html, body, #root {
    height:100vh;
    min-height:570px;
    max-width:100vw;
    height:100%;
    width: 100%;
    background-color:rgb(0,0,0,.2);
    overflow-y:scroll;
     scrollbar-width: none;
     -ms-overflow-style: none; 

     &::-webkit-scrollbar{
          width:0;
          height:0;
     }
    
}
*,button, input{
    border:0;
    background:none;
    font-family: Helvetica, sans-serif; 
    
}
:root{
    --background: rgb(0,0,0,.9);
    --input: #fff;
    --button: #25d366;
    --my-text-area: #79BF83;
    --your-text-area: #fff;
    --text: #000;
    --text-time: grey;
    --outline: grey;
    --active-button:#79BF83;

}
`
 