import React from "react";
import {Container} from './styles';
import { Select, FormControl, FilledInput, MenuItem, TextField, InputLabel} from "@mui/material";
import { useState } from "react";
import {planets} from "../../constants/planets";


const FormCreateTravel=()=>{

    const [date,setDate] = useState('2022-12-21')
    const [planet,setPlanet] = useState('')

    const onChangeDate = (e)=>{
       setDate(e.target.value)
    }
    const onChangePlanet = (e)=>{
       setPlanet(e.target.value)
    }
    const planetsRender = planets.map((planet)=><MenuItem key={planet.value} value={planet.value}>{planet.name}</MenuItem>)
  return (
   <Container>
        <FormControl fullWidth  variant="filled">
            <InputLabel>Name</InputLabel>
            <FilledInput/>
        </FormControl>  
        <FormControl fullWidth  variant="filled">
            <InputLabel>Planet</InputLabel>
            <Select  
            defaultValue={0} 
            onChange={(e)=>onChangePlanet(e)}
            >{planetsRender}
            </Select>
        </FormControl>
        <FormControl fullWidth  variant="filled">
        <TextField 
            variant="filled"
            label="Departure"
            type="date"
            InputLabelProps={{shrink: true}}
            value={date}
            onChange={(e)=>onChangeDate(e)}  
        />
        </FormControl>
        <FormControl fullWidth  variant="filled">
            <InputLabel>Description</InputLabel>
            <FilledInput maxRows={2} placeholder="Description" multiline/>
        </FormControl>
        <FormControl fullWidth  variant="filled">
            <InputLabel>Travel time (in days)</InputLabel>
            <FilledInput placeholder="Travel time (in days)"/>
        </FormControl>
    
   </Container>
  );
}



export default FormCreateTravel;