import React from "react";
import {Container} from './styles';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Travels from "../../pages/Travels";
import TravelsAdm from "../../pages/TravelsAdm";
import NewTravel from "../../pages/NewTravel";
import ErrorPage from "../../pages/ErrorPage";
import TravelDetails from "../../pages/TravelDetails";
import ApplyTravelPage from "../../pages/ApplyTravelPage";




const Router=()=>{
  return (
   <Container>
      <BrowserRouter>
        <Routes>
            <Route index element = {<Home/>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/admin/new-travel" element ={<NewTravel/>}/>
            <Route path="/travels" element ={<Travels/>}/>
            <Route path="/admin/travels" element ={<TravelsAdm/>}/>
            <Route path="/admin/travel-details/:id" element ={<TravelDetails/>}/>
            <Route path="/reserve" element ={<ApplyTravelPage/>}/>
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </BrowserRouter>
    
   </Container>
  );
} 

export default Router;