import React from "react";
import {Container} from './styles';
import Button from '@mui/material/Button';

const ButtonStandard=(props)=>{
  return (
   <Container>
        <Button
            onClick={props.onClick}
            variant={props.variant} 
            color={props.color}
            endIcon={props.endIcon}
            startIcon={props.startIcon}
            >{props.children}</Button>
   </Container>
  );
}

export default ButtonStandard;