import React,{useEffect} from "react";
import FormCreateTravel from "../../_molecules/FormCreateTravel";
import HeaderNewTravel from "../../_molecules/HeaderNewTravel";
import {Container} from './styles';
import {useNavigate} from 'react-router-dom';
import { goAdmTravels, goLogin } from "../../routes/Coordinator";
import useForm from "../../hooks/useForm";
import axios from "axios";


const NewTravel=()=>{

  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){
      goLogin(navigate)
    }

  },[])

  const initialValue = {
    name:"", 
    planet:"",
    departure:"2012-12-21",
    description:"",
    travelTime:"",
}
const {form,onChange,cleanInputs} = useForm(initialValue)

const onClickBack = ()=>{
  goAdmTravels(navigate)
}
const onClickLogout = ()=>{
  localStorage.removeItem('token')
  goLogin(navigate)
}   
const onClickNewTravel = (e)=>{
  e.preventDefault()
  const options = {
    url:`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-antunes-hooks/trips
    `,
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json;charset=UTF-8',
      'auth':localStorage.getItem('token')
    },
    data:{
      "name": form.name,
      "planet": form.planet,
      "date": form.departure,
      "description": form.description,
      "durationInDays": form.travelTime
    }
  }
  axios(options)
  .then(response=>{console.log(response)})
  .catch(error=>{console.log(error)})
  cleanInputs()
}
  return (
   <Container>
      <HeaderNewTravel
      onClickBack = {onClickBack}
      onClickLogout = {onClickLogout}
      />
      <FormCreateTravel
      onChange={onChange}
      form={form}
      onClickNewTravel={onClickNewTravel}
      />
   </Container>
  );
}

export default NewTravel;