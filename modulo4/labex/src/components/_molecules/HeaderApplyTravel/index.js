import React from "react";
import {Container} from './styles';
import ButtonPrimary from "../../_atoms/ButtonPrimary";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoginIcon from '@mui/icons-material/Login';

const HeaderApplyTravel=(props)=>{


  return (
   <Container>
    <h1>Apply to Travel</h1>
    <div>
        <ButtonPrimary
        onClick={props.onClickBack}
        startIcon={<ArrowBackIcon/>}
        children="Back"
        />
        <ButtonPrimary
        children="LOGIN"
        type="submit"
        onClick={props.onClickLogin}
        endIcon={<LoginIcon/>}
        />
    </div>
   </Container>
  );
}

export default HeaderApplyTravel;