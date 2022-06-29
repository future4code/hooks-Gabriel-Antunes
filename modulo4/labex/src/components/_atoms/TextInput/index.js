import React from "react";
import {Container} from './styles';
import { TextField } from "@mui/material";

const TextInput=()=>{
  return (
   <Container>
     <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          fullWidth
        />

   </Container>
  );
}

export default TextInput;