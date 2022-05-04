import React from "react";
import {Input} from './styles';
import { BsChevronCompactDown } from 'react-icons/bs';


class LockInput extends React.Component{
    render(){
        return(
                <Input onClick={this.props.onClickOptions}>
                    <p>{this.props.question}</p>
                    <BsChevronCompactDown /> 
                </Input>  
        )
    }
}

export default LockInput