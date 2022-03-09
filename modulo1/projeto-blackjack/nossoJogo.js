/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// if(confirm('Quer iniciar uma nova rodada?')){

// //sorteia carta para o jogador
//    let primeiraCartaJogador = comprarCarta()
//    let segundaCartaJogador = comprarCarta()

//    let cartasJogador = `${primeiraCartaJogador.texto} ${segundaCartaJogador.texto}` //erro que estava ocorrendo: declarar duas variaveis com vírgula, só deu certo quando declarei as duas dentro de uma string
//    let pontosJogador = Number(primeiraCartaJogador.valor) + Number(segundaCartaJogador.valor)
//   //atribui carta ao jogador 
//   const jogador = {
//      cartas: cartasJogador,
//      pontuacao: pontosJogador,
//   }
 
//   let primeiraCartaComputador = comprarCarta()
//   let segundaCartaComputador = comprarCarta()

//   let cartasComputador = `${primeiraCartaComputador.texto} ${segundaCartaComputador.texto}`
//   let pontosComputador = Number(primeiraCartaComputador.valor)+Number(segundaCartaComputador.valor)

//   const computador ={
//      cartas: cartasComputador,
//      pontuacao: pontosComputador,
//   }
// let resultado 

// if (jogador.pontuacao > computador.pontuacao){
//    resultado = 'O usuário Ganhou!'
// } else if (jogador.pontuacao === computador.pontuacao){
//    resultado = 'Empate!'
// }else {
//    resultado = 'O computador ganhou!'
// }
//   console.log(`Usuário - cartas: ${jogador.cartas} - Pontuação: ${jogador.pontuacao}`)
//   console.log(`Computador - cartas: ${computador.cartas} - Pontuação: ${computador.pontuacao}`)
//   console.log(resultado)






// }else{
//    console.log('O jogo acabou!')
// }

