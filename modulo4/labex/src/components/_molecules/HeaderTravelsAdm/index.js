import React from "react";
import ButtonPrimary from "../../_atoms/ButtonPrimary";
import {Container} from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';


const HeaderTravelsAdm=(props)=>{

  return (
   <Container>
    <h1>Control Painel</h1>
    <div>
        <ButtonPrimary
        onClick={props.onClickBack}
        startIcon={<ArrowBackIcon/>}
        children="Back"
        />
        <ButtonPrimary
        onClick={props.onClickNewTravel}
        startIcon={<AddBoxIcon/>}
        children="New travel"
        />
        <ButtonPrimary
        onClick={props.onClickLogout}
        startIcon={<LogoutIcon/>}
        children="Logout"
        />
    </div>
   </Container>
  );
}

export default HeaderTravelsAdm;