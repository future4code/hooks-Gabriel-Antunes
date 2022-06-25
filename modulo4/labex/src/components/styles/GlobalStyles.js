import {createGlobalStyle} from 'styled-components';
import backgroundImg from '../assets/img/background-earth.png';

export default createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family:roboto,san-serif;
    }
    #root,html,body{
        background:${`url(${backgroundImg})`};
        width:100vw;
        min-height:100vh;
        background-size:cover;
        background-position:bottom center;
        background-repeat:no-repeat;
        overflow-y:scroll;
        scrollbar-width: none;
        -ms-overflow-style: none; 
        &::-webkit-scrollbar{
            width:0;
            height:0;
     }
    }
`;