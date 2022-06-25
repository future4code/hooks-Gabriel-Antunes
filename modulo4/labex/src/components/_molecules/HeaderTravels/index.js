import React from "react";
import ButtonPrimary from "../../_atoms/ButtonPrimary";
import {Container} from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CardTravelIcon from '@mui/icons-material/CardTravel';

const HeaderTravels=(props)=>{
  
  return (
   <Container>
        <ButtonPrimary
        onClick={props.onClickBack}
        children="Back"
        startIcon={<ArrowBackIcon/>}
        />
        <ButtonPrimary
        onClick={props.onClickReserve}
        children="Reserve"
        startIcon={<CardTravelIcon/>}
        />
   </Container>
  );
}

export default HeaderTravels;