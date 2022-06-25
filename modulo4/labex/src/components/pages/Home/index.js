import React from "react";
import HomeButtons from "../../_molecules/HomeButtons";
import {Container} from './styles';
import { goLogin,showTravels } from "../../routes/Coordinator";
import {useNavigate} from "react-router-dom";

const Home=()=>{
  const navigate = useNavigate()
  const onClickLogin = ()=>{
    goLogin(navigate)
  }
  const onClickShowTravels=()=>{
    showTravels(navigate)
  }
  return (
   <Container>  
     <HomeButtons
     onClickLogin={onClickLogin}
     onClickShowTravels={onClickShowTravels}
     />
   </Container>
  );
}

export default Home;