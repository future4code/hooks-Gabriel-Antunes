import React from "react";
import {Container} from './styles';
import ButtonPrimary from "../../_atoms/ButtonPrimary";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";

const HeaderNewTravel=(props)=>{

  return (
   <Container>
    <h1>Create New Travel</h1>
    <div>
        <ButtonPrimary
        onClick={props.onClickBack}
        startIcon={<ArrowBackIcon/>}
        children="Back"
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

export default HeaderNewTravel;