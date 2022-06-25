import React from "react";
import {Container} from './styles';
import HeaderApplyTravel from "../../_molecules/HeaderApplyTravel";
import FormApplyTravel from "../../_molecules/FormApplyTravel";
import { useNavigate } from "react-router-dom";
import {showTravels,goLogin} from "../../routes/Coordinator"

const ApplyTravelPage=()=>{
  const navigate=useNavigate()
  const onClickBack = ()=>{
    showTravels(navigate)
  }
  const onClickLogin = ()=>{
    goLogin(navigate)
  }
  return (
   <Container>
    <HeaderApplyTravel 
    onClickLogin={onClickLogin}
    onClickBack={onClickBack}
    />
    <FormApplyTravel/>
   </Container>
  );
}

export default ApplyTravelPage; 