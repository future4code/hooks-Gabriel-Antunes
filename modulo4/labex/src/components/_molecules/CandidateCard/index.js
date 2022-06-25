import React from "react";
import {Container, CandidateButtons} from './styles';
import RowTable from "../../_atoms/RowTable";
import ButtonStandard from "../../_atoms/ButtonStandard"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CandidateCard=(props)=>{
  
const onClickDismiss = ()=>{console.log('Dismiss')}
const onClickApprove = ()=>{console.log('Approve')}

  return (
   <Container>
    <RowTable title="Name:" text={props.name}/>
    <RowTable title="Age:" text={props.age}/>
    <RowTable title="Message:" text={props.message}/>
    <RowTable title="Profession:" text={props.profession}/>
    <RowTable title="Country:" text={props.country}/>
    <CandidateButtons>
    <ButtonStandard
        onCLick={onClickDismiss}
        variant="contained"
        color="error"
        children="Dismiss"
        startIcon={<HighlightOffIcon/>}
        />
        <ButtonStandard
        onCLick={onClickApprove}
        variant="contained"
        color="success"
        children="Approve"
        startIcon={<CheckCircleIcon/>}
        />
    </CandidateButtons>
   </Container>
  );
}

export default CandidateCard;