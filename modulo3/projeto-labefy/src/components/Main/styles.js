import styled from 'styled-components';

export const Container = styled.div`
    min-width:100vw;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;


`;

export const Header = styled.div`
    width:100%;
    height:8vh;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    position:fixed;
    z-index:10;
    padding:0 20vw;
    gap:25px;

    input{
        width:40vw;
        height:30px;
        border-radius:15px;
        border:none;
        outline:none;
        color:white;
        font-size:14px;
        padding:0 15px ;
        background-color:rgba(0,0,0,.7);
        &::placeholder{
            color:#7b7b7b;
        }
    }
   
`;

export const Logo = styled.div`
    height:80%;
    width:200px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    border-radius:20px;
    gap:5px;

    span{
        font-size:25px;
        color:rgb(0,230,0);
        font-weight:bold;
        max-height:100%;
    }
    svg{
        color:rgb(0,230,0);
        margin:10px;
        transform:scale(2.2);
        max-height:100%;
    }

    &:hover{
        cursor: pointer;
        background-color:rgba(255,255,255,.1);
   }
    &:active{
        transform:scale(1.02);
    }
`;

export const Page = styled.div`
    width:80vw;
    height:90vh;
    display:flex;
    margin-top:8vh;
    flex-direction:row;
    gap:1%;
    padding:20px;
    border-radius:5px;

`;


export const SideBar = styled.div`
    width:30%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:1%;
    background-color:rgba(128,128,128,.1);
    border-radius:5px;
    border:1px ridge black;
`;

export const MainApp = styled.div`
    width:68%;
    border-radius:5px;
    border:1px ridge black;
   
`;

export const Playlists = styled.div`
    width:100%;
    height:80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    overflow-y:scroll;
    scrollbar-width:none;
    -ms-overflow-style:none;
    &::-webkit-scrollbar{
        width:0;
        height:0;
    }
`;

export const NewPlaylist = styled.div`
    width:100%;
    height:20%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:rgba(0,0,0,.2);
    color:white;
    gap:10%;
    padding:2%;
    
    span{
        font-size:18px;
        max-height:30%;
        white-space:nowrap;
        max-width:95%;
        overflow-x:hidden;
        text-overflow:ellipsis;
    }
    input{
        width:60%;
        background-color:rgba(255,255,255,.3);
        height:30px;
        max-height:30%;
        border-radius:15px;
        border:none;
        outline:none;
        padding: 0 3%;
        color:white;
    }
    button{
        width:40%;
        height:30px;
        max-height:30%;
        border-radius:15px;
        border:none;
        font-size:16px;

        &:hover{
            cursor: pointer;
            background-color:green;
            color:white;
        }
    }
`;



