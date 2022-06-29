import React from "react";
import HeaderTravels from "../../_molecules/HeaderTravels";
import TravelCard from "../../_molecules/TravelCard";
import {Container} from './styles';
import {goReserve,goHome} from '../../routes/Coordinator';
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import {urlGetTravels} from "../../constants/urlsAPI";
import { SpinnerInfinity } from 'spinners-react';

const Travels=()=>{
  const navigate = useNavigate();
  const [data,isLoading] = useRequestData(urlGetTravels);
    
  const onClickBack = ()=>{
    goHome(navigate)
  }
  const onClickReserve = ()=>{
    goReserve(navigate)
  }
  
  const renderTravels = data && data.trips.map((travel)=>{
    return(
      <TravelCard
      key={travel.id}
      name={travel.name}
      description={travel.description}
      planet={travel.planet}
      duration={travel.durationInDays}
      date={travel.date}
      />
    )
  })
  return (
   <Container>
    <HeaderTravels
      onClickBack={onClickBack}
      onClickReserve={onClickReserve}
    />
    {isLoading && <SpinnerInfinity size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />}
    {renderTravels}
   </Container>
  );
}

export default Travels;