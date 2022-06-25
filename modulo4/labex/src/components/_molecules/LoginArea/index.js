import React from "react";
import ButtonPrimary from "../../_atoms/ButtonPrimary";
import {Container, Buttons} from './styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import LoginIcon from '@mui/icons-material/Login';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TextField,InputAdornment } from "@mui/material";


const LoginArea=(props)=>{

  return (
   <Container>
      <TextField
        name="email" 
        onChange={props.handleEmail}
        value={props.valueEmail}
        placeholder={props.placeholderEmail} 
        error={props.error}
        variant="outlined"
        required
        fullWidth
        type="email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <AccountCircleIcon/>
            </InputAdornment>
          ),
        }}
      />
      <TextField 
        name="password"
        onChange={props.handlePassword}
        value={props.valuePassword}
        placeholder={props.placeholderPassword} 
        error={props.error}
        variant="outlined"
        required
        fullWidth
        type="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
            <PasswordIcon/>
            </InputAdornment>
          ),
        }}
      />
      <Buttons>
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
      </Buttons>

   </Container>
  );
}

export default LoginArea;
