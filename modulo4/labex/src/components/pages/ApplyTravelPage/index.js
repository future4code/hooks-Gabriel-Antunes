import React from "react";
import {Container} from './styles';
import HeaderApplyTravel from "../../_molecules/HeaderApplyTravel";
import FormApplyTravel from "../../_molecules/FormApplyTravel";
import { useNavigate } from "react-router-dom";
import {showTravels,goLogin} from "../../routes/Coordinator";
import useRequestData from "../../hooks/useRequestData";
import useForm from "../../hooks/useForm";
import {countries} from '../../constants/countries';
import {urlApplyTrip, urlGetTravels} from '../../constants/urlsAPI';
import {MenuItem} from '@mui/material';
import axios from "axios";

const ApplyTravelPage=()=>{
  const navigate=useNavigate()

  const [data] = useRequestData(urlGetTravels)

  const initialValue = {
        travel:"",
        name:"", 
        age:"",
        message:"",
        profession:"",
        country:"",
  }
  const {form,onChange} = useForm(initialValue)

  const travelsRender = data && data.trips.map((travel)=>{
    return <MenuItem key={travel.id} value={travel.id}>
    {travel.name}  
    </MenuItem>
  })

  const countriesRender = countries.map((item)=><MenuItem key={item.label} value={item.label}>{item.label}</MenuItem>)

  const onClickBack = ()=>{
    showTravels(navigate)
  }
  const onClickLogin = ()=>{
    goLogin(navigate)
  }
  const onClickSendRequest = (e)=>{
    e.preventDefault()
    const body = {
    name: form.name,
    age: form.age,
    applicationText: form.message,
    profession: form.profession,
    country: form.country,
    }
    axios.post(urlApplyTrip(form.travel),body)
    .then(showTravels(navigate))
    .catch((err)=>{
      console.log(err.response.data)
    })  
    
    
  }
  return (
   <Container>
    <HeaderApplyTravel 
    onClickLogin={onClickLogin}
    onClickBack={onClickBack}
    />
    <FormApplyTravel
    form={form}
    onChange={onChange}
    listCountries={countriesRender}
    listTravels={travelsRender}
    onClickSendRequest={onClickSendRequest}
    />
   </Container>
  );
}

export default ApplyTravelPage; 