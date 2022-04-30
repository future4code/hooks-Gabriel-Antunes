import React from "react";
import { Emoji } from "./styles";
import { BsEmojiLaughing } from "react-icons/bs";


const ButtonEmojis = (props) => {


  return (
    <Emoji onClick={props.onClickButton}>
      <BsEmojiLaughing size="1.5rem"/>
    </Emoji>
  );
};

export default ButtonEmojis;
