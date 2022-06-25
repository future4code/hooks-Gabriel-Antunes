import React, { useState } from "react";
import LoginArea from "../../_molecules/LoginArea";
import {Container} from './styles';
import { goAdmTravels, goHome } from "../../routes/Coordinator";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { urlLogin } from "../../constants/urlsAPI";
import useForm from "../../hooks/useForm"

const Login=()=>{
  const navigate = useNavigate()

  const {form,onChange,cleanInputs} = useForm({email:"",password:""})
  const [placeEmail,setplaceEmail] = useState("E-mail")
  const [placePassword,setPlacePassword] = useState("Password")
  const [loginError,setLoginError] = useState(false)

  const onClickBack = ()=>{
    goHome(navigate)
  }
  const onLogin = (event)=>{
    event.preventDefault()
    const body ={
      email:form.email,
      password:form.password
    }
  
    axios.post(urlLogin,body)
    .then((res)=>{
      localStorage.setItem("token",res.data.token);
      cleanInputs()
      goAdmTravels(navigate)
    })
    .catch((err)=>{
      console.log(err.response.data)
      setplaceEmail("check your credentials");
      setPlacePassword("check your credentials");
      cleanInputs()
      setLoginError(true);
    })
    
  }
  return (
   <Container>
      <h1>Admin Login</h1>
      <LoginArea 
        //email props
        handleEmail={onChange}
        valueEmail={form.email}
        placeholderEmail={placeEmail}
        //comum prop
        error={loginError} 
        //password props
        handlePassword={onChange}
        valuePassword={form.password}
        placeholderPassword={placePassword}
        //buttons props
        onClickLogin={onLogin}
        onClickBack={onClickBack}
      />
   </Container>
  );
}

export default Login;