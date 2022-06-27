import React from "react";
import {Container} from './styles';
import { Select, FormControl, FilledInput, MenuItem, TextField, InputLabel} from "@mui/material";
import {planets} from "../../constants/planets";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ButtonPrimary from "../../_atoms/ButtonPrimary";


const FormCreateTravel=(props)=>{

    const planetsRender = planets.map((planet)=><MenuItem key={planet.value} value={planet.value}>{planet.name}</MenuItem>)
    return (
    <Container>
            <FormControl fullWidth  variant="filled">
                <InputLabel>Name</InputLabel>
                <FilledInput
                name="name"
                value={props.form.name}
                onChange={props.onChange}
                required
                />
            </FormControl>  
            <FormControl fullWidth  variant="filled">
                <InputLabel>Planet</InputLabel>
                <Select  
                name="planet"
                value={props.form.planet}
                onChange={props.onChange}
                required
                >{planetsRender}
                </Select>
            </FormControl>
            <FormControl fullWidth  variant="filled">
            <TextField 
                variant="filled"
                label="Departure"
                type="date"
                InputLabelProps={{shrink: true}}
                name="departure"
                value={props.form.departure}
                onChange={props.onChange} 
                required 
            />
            </FormControl>
            <FormControl fullWidth  variant="filled">
                <InputLabel>Description</InputLabel>
                <FilledInput 
                maxRows={2} 
                placeholder="Description" 
                multiline
                name="description"
                value={props.form.description}
                onChange={props.onChange}  
                required
                />
            </FormControl>
            <FormControl fullWidth  variant="filled">
                <InputLabel>Travel time (in days)</InputLabel>
                <FilledInput 
                placeholder="Travel time (in days)"
                name="travelTime"
                value={props.form.travelTime}
                onChange={props.onChange} 
                required 
                />
            </FormControl>
            <ButtonPrimary
            onClick={props.onClickNewTravel}
            startIcon={<AddBoxIcon/>}
            children="Add travel"
            type="submit"
            />
        
    </Container>
    );
}



export default FormCreateTravel;