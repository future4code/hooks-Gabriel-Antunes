import React from "react";
import {Container, ProfileInfos} from './styles';
import photoLike from '../img/astromatch-like-photo.png';
import photoDisLike from '../img/astromatch-dislike-photo.png';

const ProfileToChoose=(props)=>{
  return (
   <Container 
   photoLink={props.photoLink} 
   animation={props.animation}
   >
     <div onClick={props.onClickDisLike}>
       <img src={photoDisLike} alt="Dislike" />
      </div>
      <div onClick={props.onClickLike}>
       <img src={photoLike} alt="Like" />
      </div>
      <ProfileInfos 
      name={props.name} 
      age={props.age} 
      bio={props.bio}>
      <span>{props.name}  {props.age}</span>
      <p>{props.bio}</p> 
      </ProfileInfos>
   </Container>
  );
}

export default ProfileToChoose;