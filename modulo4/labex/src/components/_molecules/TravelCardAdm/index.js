import React from "react";
import {Container} from './styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const TravelCardAdm=(props)=>{
  return (
   <Container>
    <h3 onClick={props.onClickTravel}>{props.name}</h3>
    <DeleteOutlineIcon onClick={()=>props.onClickDeleteTravel(props.id)}/>
   </Container>
  );
}

export default TravelCardAdm;