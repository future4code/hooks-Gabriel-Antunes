import React from "react";
import RowTable from "../../_atoms/RowTable";
import {Container} from './styles'

const TravelCard=(props)=>{
  return (
   <Container>
    <RowTable title="Name:" text={props.name}/>
    <RowTable title="Description:" text={props.description}/>
    <RowTable title="Planet:" text={props.planet}/>
    <RowTable title="Duration:" text={props.duration}/>
    <RowTable title="Date:" text={props.date}/>
   </Container>
  );
}

export default TravelCard;