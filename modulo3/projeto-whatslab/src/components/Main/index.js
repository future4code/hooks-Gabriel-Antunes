import React from "react";
import { Container, Aplication, ContainerSend, User, Input,ContainerMessage, Message, MyMessage, BoxMessage, BoxMyMessage, ButtonSend} from './styles';
import ButtonEmojis from "../ButtonEmojis";
import { IoMdSend } from 'react-icons/io';


class Main extends React.Component{

    state={
        chat:[
        ],

        inputUser:"",
        inputMessage:"",
        messageId:"",

        }

        sendMessage = () =>{
            
        const newMessage = {

            user: this.state.inputUser.toUpperCase(),
            message: this.state.inputMessage,
            id: Date.now(),
        };

        const attChat = [newMessage, ...this.state.chat];

        this.setState({chat:attChat});
        this.setState({inputMessage:""});
        this.setState({inputUser:""});
        this.setState({messageId:""});
       
        }

        deleteMessage = (item)=>{
                const newChat = this.state.chat.filter((message)=>{
                    return message.id !== item.id
                })
                this.setState({chat:newChat})
        }

    onChangeUser=(e)=>{this.setState({inputUser:e.target.value})};
    onChangeMessage=(e)=>{this.setState({inputMessage:e.target.value})};
    pressEnter=(e)=>{if(e.key === "Enter"){this.sendMessage()}};

    render(){

        const speaking = [this.state.chat.map((item,i)=> {
            
            if(item.user === "EU" || item.user === "GABRIEL" || item.user === "ME"){
                return(
                        <BoxMyMessage key={i}>
                            <MyMessage  onDoubleClick={()=>this.deleteMessage(item)}>
                                <p>{item.message}</p>
                            </MyMessage>
                        </BoxMyMessage>
                )
            }else{            
            return (            
            <BoxMessage key={i}>
                <Message onDoubleClick={()=>this.deleteMessage(item)}>
                    <span>{item.user}</span>
                    <p>{item.message}</p>
                </Message>
            </BoxMessage>
            )}
        })];

    return (
        <Container>
            <Aplication>
                <ContainerMessage>
                  {speaking}
                </ContainerMessage>

                <ContainerSend>
                    <ButtonEmojis />
                    <User placeholder="User" onChange={this.onChangeUser} value={this.state.inputUser} />
                    <Input onKeyPress={this.pressEnter}placeholder="Message"  onChange={this.onChangeMessage} value={this.state.inputMessage} />
                    <ButtonSend onClick={this.sendMessage}>
                        <IoMdSend size="1.3rem" color='white' />
                    </ButtonSend>
                </ContainerSend>

            </Aplication>
        </Container>
    );
};
};
export default Main