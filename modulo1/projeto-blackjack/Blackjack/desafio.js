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

   if (confirm('Bem vindo ao jogo de Blackjack! Quer iniciar uma nova rodada?')){

   
   let cartasJogador = [comprarCarta(),comprarCarta()]
   let cartasComp = [comprarCarta(), comprarCarta()]
   let imprimeCartas = (arr) => {
      return (arr.map(item => item.texto)).join([separador = ' '])
      }
   let calculaValor = (arr) => {
      return arr.reduce((inicio, item)=> inicio + item.valor, 0)
      } 

   let comprarMaisCarta = 0;
   let pontosJogador = calculaValor(cartasJogador);

   for(;;){
      comprarMaisCarta = confirm(`Suas cartas são ${imprimeCartas(cartasJogador)}. A carta revelada pelo computador é ${cartasComp[0].texto}. Deseja comprar mais uma carta?`)
      if(comprarMaisCarta === true){
         cartasJogador.push(comprarCarta())
         pontosJogador = calculaValor(cartasJogador)
      } 
      if (pontosJogador > 21 || comprarMaisCarta === false){
         break
      }
   }
   alert(`O jogo acabou, suas cartas são ${imprimeCartas(cartasJogador)}`)
   }
   else{alert(`O jogo nem começou`)}


// duas formas de separar os valores dos objetos "carta" dentro das arrays "jogador". map cria uma array usando só os itens "valor" e o reduce soma estes itens. 
// let valorCartas = cartasUsuario.map(item => item.valor).reduce((prev, curr) => prev + curr,0)
// let valorCartas2 = cartasUsuario.reduce((prev, cartasUsuario) => prev + cartasUsuario.valor, 0)
