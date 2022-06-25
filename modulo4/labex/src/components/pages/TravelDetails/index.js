import React from "react";
import {Container} from './styles';
import CandidateCard from '../../_molecules/CandidateCard';
import TravelCard from '../../_molecules/TravelCard'

const TravelDetails=(props)=>{

  return (
   <Container>
    <h1>{props.travelName} details</h1>
    <TravelCard />
    <h2>Candidates</h2>
    <CandidateCard />
   </Container>
  );
}

export default TravelDetails;