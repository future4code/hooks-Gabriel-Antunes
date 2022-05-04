import React from "react";
import {Input} from './styles';

class FreeInput extends React.Component{
    render(){
        return (
            <>
            <Input placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange}/>
            </>
        )
    }
}

export default FreeInput