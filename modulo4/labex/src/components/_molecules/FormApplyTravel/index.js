import React from "react";
import {Container} from './styles';
import { Select, FormControl, FilledInput, MenuItem, InputLabel} from "@mui/material";
import {countries} from '../../constants/countries';
import useForm from "../../hooks/useForm";
import ButtonPrimary from "../../_atoms/ButtonPrimary";
import AddBoxIcon from '@mui/icons-material/AddBox';
import useRequestData from "../../hooks/useRequestData";
import { urlGetTravels } from "../../constants/urlsAPI";


const FormApplyTravel=(props)=>{
    const [data,onLoading,error] = useRequestData(urlGetTravels)

    const countriesRender = countries.map((item)=><MenuItem key={item.label} value={item.label}>{item.label}</MenuItem>)
    const initialValue = {
        travel:"",
        name:"", 
        age:"",
        message:"",
        profession:"",
        country:"",
    }
    const {form,onChange} = useForm(initialValue)

    return (
    <Container>
        <FormControl fullWidth  variant="filled">
            <InputLabel>Travel</InputLabel>
            <Select required
            name="travel"  
            value={form.travel}
            onChange={onChange}
            >
            <MenuItem key={1} value={1}>{"teste"}</MenuItem>
            <MenuItem key={2} value={2}>{"teste 2 "}</MenuItem>
            </Select>
        </FormControl>

        <FormControl fullWidth  variant="filled">
            <InputLabel>Name</InputLabel>
            <FilledInput required
            name="name" 
            value={form.name}
            onChange={onChange}
            />
        </FormControl>  

        <FormControl fullWidth  variant="filled">
            <InputLabel>Age</InputLabel>
            <FilledInput required
            name="age"
            value={form.age}
            onChange={onChange}
            />
        </FormControl> 

        <FormControl fullWidth  variant="filled">
            <InputLabel>Message</InputLabel>
            <FilledInput required
            name="message"
            value={form.message}
            onChange={onChange}
            />
        </FormControl> 

        <FormControl fullWidth  variant="filled">
            <InputLabel>Profession</InputLabel>
            <FilledInput required
            name="profession"
            value={form.profession}
            onChange={onChange}
            />
        </FormControl>  
        
        <FormControl fullWidth  variant="filled">
            <InputLabel>Country</InputLabel>
            <Select required
            label="Country"
            name="country"
            value={form.country}
            onChange={onChange}
            >{countriesRender}
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