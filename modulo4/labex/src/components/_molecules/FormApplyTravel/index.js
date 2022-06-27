import React from "react";
import {Container} from './styles';
import { Select, FormControl, FilledInput, MenuItem, InputLabel} from "@mui/material";
import ButtonPrimary from "../../_atoms/ButtonPrimary";
import AddBoxIcon from '@mui/icons-material/AddBox';

 

const FormApplyTravel=(props)=>{

    return (
    <Container>
        <FormControl fullWidth  variant="filled">
            <InputLabel>Travel</InputLabel>
            <Select required
            name="travel"  
            value={props.form.travel}
            onChange={props.onChange}
            >
            {props.listTravels}
            </Select>
        </FormControl>

        <FormControl fullWidth  variant="filled">
            <InputLabel>Name</InputLabel>
            <FilledInput required
            name="name" 
            value={props.form.name}
            onChange={props.onChange}
            />
        </FormControl>  

        <FormControl fullWidth  variant="filled">
            <InputLabel>Age</InputLabel>
            <FilledInput required
            name="age"
            value={props.form.age}
            onChange={props.onChange}
            />
        </FormControl> 

        <FormControl fullWidth  variant="filled">
            <InputLabel>Message</InputLabel>
            <FilledInput required
            name="message"
            value={props.form.message}
            onChange={props.onChange}
            />
        </FormControl> 

        <FormControl fullWidth  variant="filled">
            <InputLabel>Profession</InputLabel>
            <FilledInput required
            name="profession"
            value={props.form.profession}
            onChange={props.onChange}
            />
        </FormControl>  
        
        <FormControl fullWidth  variant="filled">
            <InputLabel>Country</InputLabel>
            <Select required
            label="Country"
            name="country"
            value={props.form.country}
            onChange={props.onChange}
            >{props.listCountries}
            </Select>
        </FormControl>
        <FormControl fullWidth >
        <ButtonPrimary 
            children="Apply"
            onClick={props.onClickSendRequest}
            endIcon={<AddBoxIcon/>}
            type="submit"
        />
        </FormControl>
    
    </Container>
    );
    }

export default FormApplyTravel;