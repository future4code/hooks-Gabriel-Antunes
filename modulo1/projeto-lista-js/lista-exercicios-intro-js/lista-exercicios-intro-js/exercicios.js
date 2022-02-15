// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = prompt('digite altura do retângulo')
  let largura = prompt('digite largura do retângulo')

  console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt('Em que ano estamos?')
  let anoNascimento = prompt('Em que ano você nasceu?')

  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
 function calculaIMC(peso, altura) {

 return (peso / altura ** 2)

}
 
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {

  let nome = prompt('Qual seu nome?')
  let idade = prompt('Qual sua idade?')
  let email = prompt ('Qual seu email?')
  
  console.log('Meu nome é '+nome+', tenho '+idade+' anos, e o meu email é '+email+'.')
}
 

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Digite sua cor favorita!")
  let cor2 = prompt("Digite sua segunda cor favorita!")
  let cor3 = prompt("Digite sua terceira cor favorita!")

  let coresFavoritas = [cor1,cor2,cor3]

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 
  let nome = string

  let nomeMaiusculo = nome.toUpperCase()

  return nomeMaiusculo

  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

 return custo/valorIngresso

}

 // EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length === string2.length
}  

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  return  array[0]

}

 // EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
return array[array.length-1]

} 

 // EXERCÍCIO 11
 function trocaPrimeiroEUltimo(array) {
   
  const novoPrimeiro = array[array.length-1]
  const novoUltimo = array[0]
  array[0]=novoPrimeiro
  array[array.length-1]=novoUltimo
    

  return array


 } 

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()

  return string1 === string2
}

// EXERCÍCIO 13
  function checaRenovacaoRG() {
  
  let anoAtual = Number(prompt('Em que ano estamos?'))
  let anoNascimento = Number(prompt('Em que ano você nasceu?'))
  let anoEmissao = Number(prompt('Em que ano sua ID foi emitida?'))

  let tempoEmissao = anoAtual - anoEmissao

  let idade = anoAtual - anoNascimento

  

  console.log(idade <= 20 && tempoEmissao >= 5 || idade <= 50 && idade > 20 && tempoEmissao >= 10 || idade > 50 && tempoEmissao >=15)

} 
  

// EXERCÍCIO 14
  function checaAnoBissexto(ano) {

  let anoBissexto = (ano % 400) === 0 || (ano % 4) === 0 && ano<100   || (ano % 4) === 0 && (ano % 100) !== 0

  return anoBissexto
 
} 


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  
  let idade = prompt('Você tem 18 anos ou mais?')
  let escolaridade = prompt('Você tem ensino médio completo?')
  let disponibilidade = prompt('Você tem disponibilidade exclusiva durante os horários do curso?')


  console.log(idade === 'sim' && escolaridade ==='sim' && disponibilidade === 'sim') 

}