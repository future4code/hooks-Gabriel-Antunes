import React from "react";
import FormCreateTravel from "../../_molecules/FormCreateTravel";
import HeaderNewTravel from "../../_molecules/HeaderNewTravel";
import {Container} from './styles';
import {useNavigate} from 'react-router-dom';
import { goBack } from "../../routes/Coordinator";


const NewTravel=()=>{

  const navigate = useNavigate()

const onClickBack = ()=>{
  goBack(navigate)
}  
const onClickNewTravel = ()=>{
  alert('new travel')
}
  return (
   <Container>
      <HeaderNewTravel
      onClickBack = {onClickBack}
      onClickNewTravel = {onClickNewTravel}
      />
      <FormCreateTravel/>
   </Container>
  );
}

export default NewTravel;