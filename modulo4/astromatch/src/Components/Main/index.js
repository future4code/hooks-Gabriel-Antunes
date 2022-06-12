import axios from "axios";
import React, {useState, useEffect} from "react";
import {Container} from './styles';
import { urlToGetProfile,urlToClear,urlToChoose, urlMatches } from "../constants";
import Header from "../Header";
import Footer from "../Footer";
import ProfileToChoose from "../ProfileToChoose";
import ChatPage from "../ChatPage";
import ChatCard from "../ChatCard";

const Main=()=>{

  const [profile,setProfile] = useState("");
  const [animationValue,setAnimationValue] = useState("");
  const [currentPage,setCurrentPage] = useState("");
  const [matches,setMatches] = useState([]);

  useEffect(()=>  {getProfileToChoose()},[]);
  useEffect(()=> getMatches,[matches,currentPage]);

  const getProfileToChoose = async()=>{
    try{
     const res = await axios.get(urlToGetProfile);
     if(res.data.profile){ 
      setProfile(res.data.profile);
      setAnimationValue("");
    }else{
      setProfile("");
      setAnimationValue("");
    }
    
    }catch(err){alert(err.response.data.message);console.log(err)}
  }

  const getMatches = async()=>{
    try{
    const res = await axios.get(urlMatches)
      setMatches(res.data.matches)
    }catch(err){
      alert(err);console.log(err)
    }
  }

  const clear = async()=>{
    try{
      await axios.put(urlToClear);
      alert("Your matches have been successfully reset!");
      setProfile("");
      setAnimationValue("");
      getProfileToChoose();
    }catch(err){
      alert(err.response.data.message);console.log(err)
    }
  }

  const choosePerson = async(idProfile,userChoice)=>{
    const body = {
      id:idProfile,
      choice:userChoice
    }

    try{
      await axios.post(urlToChoose,body);
    }catch(err){
      alert(err);console.log(err)
    }
  }

  const getNextProfile =()=>{
    setTimeout(()=>{getProfileToChoose()} , 500);
  } 

  const onLike =(id)=>{
    if(profile){
      choosePerson(id,true);
      setAnimationValue("animationLike");
      getNextProfile();
    }else{
      alert("No more profiles to view. If you want, you can reset it in the center button below.")
    }
   
  }

  const onDisLike =(id)=>{
    if(profile){
      choosePerson(id,false);
      setAnimationValue("animationDisLike");
      getNextProfile();
    }else{
      alert("No more profiles to view. If you want, you can reset it in the center button below.")
    }  
  }

  const onClickPageChat = ()=>{
    setCurrentPage('MatchesPage')
  }
  const onClickChoosePage = ()=>{
    setCurrentPage('HomePage')
  }

  const homePage = <>
    <ProfileToChoose 
    photoLink={profile.photo} 
    photoAlt={profile.photo_alt}
    name={profile.name}
    age={profile.age}
    bio={profile.bio}
    animation={animationValue} 
    onClickLike={()=>onLike(profile.id)} 
    onClickDisLike={()=>onDisLike(profile.id)}
    />
    <Footer  
    onClickReset={clear} 
    onClickLike={()=>onLike(profile.id)} 
    onClickDisLike={()=>onDisLike(profile.id)}
    />
  </>;

  const profilesChat = matches.map((matchedProfile)=>{
    return( 
    <ChatCard 
    key={matchedProfile.id} 
    photo={matchedProfile.photo} 
    alt={matchedProfile.photo_alt} 
    name={matchedProfile.name}
    />
  )})

  const matchesPage = <ChatPage onClickReset={clear} chat={profilesChat}/>

  const pageProvider = ()=>{
    switch(currentPage){
      case 'HomePage':
        return homePage;
      case 'MatchesPage':
        return matchesPage  
      default:
        return homePage  
    }
  }
   
  return (
   <Container>
     <Header 
     clickPageChat={onClickPageChat} 
     clickChoosePage={onClickChoosePage}/>
     {pageProvider()}
   </Container>
  );
}

export default Main;