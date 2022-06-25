import React from "react";
import {Container} from './styles';
import Button from '@mui/material/Button';

const ButtonPrimary=(props)=>{
  return (
   <Container>
        <Button
            onClick={props.onClick}
            variant="contained" 
            color="primary"
            endIcon={props.endIcon}
            startIcon={props.startIcon}
            type={props.type}
            >{props.children}</Button>
   </Container>
  );
}

export default ButtonPrimary;