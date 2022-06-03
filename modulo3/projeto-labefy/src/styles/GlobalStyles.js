import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
html, body, #root{
    width:100vw;
    max-width:100vw;
    min-height:100vh;
    overflow-y:scroll;
    scrollbar-width:none;
    -ms-overflow-style:none;
    &::-webkit-scrollbar{
        width:0;
        height:0;
    }
}

#root{
    --background-color:rgba(0,0,0,.85);
}
`