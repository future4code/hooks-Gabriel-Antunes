import React,{useEffect, useState} from "react";
import TravelCardAdm from "../../_molecules/TravelCardAdm";
import HeaderTravelsAdm from "../../_molecules/HeaderTravelsAdm";
import {Container} from './styles';
import {useNavigate} from 'react-router-dom';
import {goLogin, goHome, goNewTravel, goTravelDetails } from "../../routes/Coordinator";
import useRequestData from "../../hooks/useRequestData";
import {urlGetTravels} from "../../constants/urlsAPI";
import axios from "axios";
import { SpinnerInfinity } from 'spinners-react';

const TravelsAdm=()=>{
  
  const navigate = useNavigate();
  const [changeData,setChangeData] = useState(false)

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){
      goLogin(navigate)
    }

  },[])
 
 
  const [data,isLoading] = useRequestData(urlGetTravels,changeData); 

  const renderTravels = data && data.trips.map((travel)=>{
    return(
      <TravelCardAdm
      key={travel.id}
      name={travel.name}
      onClickTravel={()=>goTravelDetail(travel.id)}
      onClickDeleteTravel={()=>onClickDeleteTravel(travel.id)}
      />
    )
  })


  const onClickBack = ()=>{
    goHome(navigate)
  }  
  const onClickNewTravel = ()=>{
    goNewTravel(navigate)
  }
  const onClickLogout = ()=>{
    localStorage.removeItem('token')
    goLogin(navigate)
  }
  const goTravelDetail=(id)=>{
    localStorage.setItem("id-travel-detail",id)
    goTravelDetails(navigate,id)
  }
  const onClickDeleteTravel = async(id)=>{
    const options = {
      url:`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-antunes-hooks/trips/${id}`,
      method:'DELETE',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json;charset=UTF-8',
        'auth':localStorage.getItem('token')
      },
    }
    try{await axios(options);setChangeData(!changeData)}
    catch(error){console.log(error)}
  }

  return (
   <Container>
    <HeaderTravelsAdm
      onClickBack={onClickBack}
      onClickNewTravel={onClickNewTravel}
      onClickLogout={onClickLogout}
    />
      {isLoading && <SpinnerInfinity size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />}
     {renderTravels}
   </Container>
  );
}

export default TravelsAdm;