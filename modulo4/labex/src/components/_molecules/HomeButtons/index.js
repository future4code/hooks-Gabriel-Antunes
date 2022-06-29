import React from "react";
import {Container} from './styles'
import LoginIcon from '@mui/icons-material/Login';
import RocketIcon from '@mui/icons-material/Rocket';
import ButtonPrimary from "../../_atoms/ButtonPrimary";

const HomeButtons=(props)=>{

    return (
   <Container>
    <ButtonPrimary 
        onClick={props.onClickLogin}
        children="Admin Login" 
        endIcon={<LoginIcon 
            size="small"
        />}
    />
    <ButtonPrimary 
        onClick={props.onClickShowTravels}
        children="ShoW Travels" 
        endIcon={<RocketIcon 
            size="small"
        />}
    />
   </Container>
  );
}

export default HomeButtons;