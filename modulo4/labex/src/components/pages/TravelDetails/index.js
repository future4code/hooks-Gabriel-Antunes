import React, { useEffect,useState } from "react";
import {Container} from './styles';
import CandidateCard from '../../_molecules/CandidateCard';
import TravelCard from '../../_molecules/TravelCard'
import { urlGetTripDetail} from "../../constants/urlsAPI";
import useRequestAuthorizedData from "../../hooks/useRequestAuthorizedData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goAdmTravels,goLogin } from "../../routes/Coordinator";
import HeaderTravelDetail from "../../_molecules/HeaderTravelDetail";
import { SpinnerInfinity } from 'spinners-react';


const TravelDetails=()=>{
  const navigate = useNavigate()
  const idTravel = localStorage.getItem("id-travel-detail")
  const [changeData,setChangeData] = useState(false)

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){
      goLogin(navigate)
    }
  },[])
  
  const [data,isLoading] = useRequestAuthorizedData(urlGetTripDetail(idTravel,changeData)); 

  const onClickDecide = async(id,decision)=>{
   
    const options = {
      url:`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-antunes-hooks/trips/${idTravel}/candidates/${id}/decide`,
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json;charset=UTF-8',
        'auth':localStorage.getItem('token')
      },
      data:{
        'approve':decision
      }
    }
    try{await axios(options);setChangeData(!changeData)}
    catch(error){console.log(error)}
  }
const onClickBack = ()=>{
  localStorage.removeItem('id-travel-detail')
  goAdmTravels(navigate)
}
 const onClickLogout = ()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('id-travel-detail')
  goLogin(navigate)
 } 

  const renderTravelCard = data && 
  <TravelCard 
  name={data.trip.name}
  description={data.trip.description}
  planet={data.trip.planet}
  date={data.trip.date}
  duration={`${data.trip.durationInDays} days`}
  />
  const renderCandidates = data && data.trip.candidates.map((candidate)=>{
    return <CandidateCard 
    key={candidate.id}
    name={candidate.name}
    age={candidate.age}
    message={candidate.applicationText}
    profession={candidate.profession}
    country={candidate.country}
    onClickDismiss={()=>onClickDecide(candidate.id,false)}
    onClickApprove={()=>onClickDecide(candidate.id,true)}
    />
  })

  return (
   <Container>
    <HeaderTravelDetail
    onClickBack={onClickBack}
    onClickLogout={onClickLogout}
    />
     {isLoading && <SpinnerInfinity size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />}
    {renderTravelCard}
    <h2>Candidates</h2>
    {isLoading && <SpinnerInfinity size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />}
    {renderCandidates}
   </Container>
  );
}

export default TravelDetails;