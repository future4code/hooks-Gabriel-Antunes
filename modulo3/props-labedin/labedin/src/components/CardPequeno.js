import React from 'react';

import styled from 'styled-components';

export const CardPeq = styled.section`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
    width: 40vw;

    img {
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
}
`


function CardPequeno(props){
    
    return(
        <CardPeq>
           <img src={props.imagem} alt={props.tipoEndereco}/>
           <p>{props.tipoEndereco}: {props.endereco}</p>
        </CardPeq>
    )
}

export default CardPequeno

 