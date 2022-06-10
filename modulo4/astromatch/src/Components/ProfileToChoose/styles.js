import styled from 'styled-components';


export const Container = styled.div`
    min-width:90%;
    min-height:70%;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    flex-wrap:wrap;
    background-image:${(props) => `url(${props.photoLink})`};
    background-size:100%; 
    background-repeat:no-repeat;
    background-position:center;
    background-color:rgba(0,0,0,.3);
    animation: ${(props)=>props.animation} 2s .15s;

    div:nth-child(1){
        width:45%;
        height:70%;
        padding:30px 40px;
        img{
            transform:rotate(-25deg) scale(1.2);
            visibility:${(props)=>props.animation === "animationDisLike"?"visible":"hidden"}; 
        }
    }
    div:nth-child(2){
        width:45%;
        height:70%;
        padding:30px 40px;
        img{
            transform:rotate(25deg) scale(1.2);
            visibility:${(props)=>props.animation === "animationLike"?"visible":"hidden"}; 
        }
    }

    @keyframes animationLike {
    from{
        transform: translateX(0) translateY(0) rotate(0) ;
        opacity:100%;
    }to{
        transform: translateX(800px) translateY(-50px) rotate(45deg);
        opacity:0;
    }
}      
    @keyframes animationDisLike {
    from{
        transform: translateX(0) translateY(0) rotate(0);
        opacity:100%;
    }to{
        transform: translateX(-800px) translateY(-50px) rotate(-45deg);
        opacity:0;
    }
    }
`;
export const ProfileInfos = styled.div`
    width:100%;
    height:30%;
    padding:20px 20px;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.6041666666666667) 13%, rgba(0,0,0,0.49768518518518523) 30%, rgba(0,0,0,0.42361111111111116) 54%, rgba(0,0,0,0.3055555555555556) 69%, rgba(0,0,0,0.17129629629629628) 86%, rgba(0,0,0,0) 99%);
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    
    span{
        font-size:24px;
        font-weight:bold;
        color:white;
        letter-spacing:2px;
    }
    p{
        color:white;
        font-size:16px;
        margin-top:5px;
        max-width:85%;
    }

    &:hover{
        background-color:rgba(0,0,0,.2);
    }
`;