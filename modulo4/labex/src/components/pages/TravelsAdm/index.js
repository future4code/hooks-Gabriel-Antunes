import React from "react";
import TravelCardAdm from "../../_molecules/TravelCardAdm";
import HeaderTravelsAdm from "../../_molecules/HeaderTravelsAdm";
import {Container} from './styles';
import {useNavigate} from 'react-router-dom';
import { goBack, goHome, goNewTravel } from "../../routes/Coordinator";


const TravelsAdm=()=>{

const navigate = useNavigate()  

const onClickBack = ()=>{
  goBack(navigate)
}  
const onClickNewTravel = ()=>{
  goNewTravel(navigate)
}
const onClickLogout = ()=>{
  localStorage.removeItem('token')
  goHome(navigate)
}

  return (
   <Container>
    <HeaderTravelsAdm
      onClickBack={onClickBack}
      onClickNewTravel={onClickNewTravel}
      onClickLogout={onClickLogout}
    /> 
   </Container>
  );
}

export default TravelsAdm;