import React from "react";
import {Container} from './styles'

const RowTable=(props)=>{
  return (
   <Container>
        <span>{props.title}</span>
        <p>{props.text}</p>
   </Container>
  );
}

export default RowTable;