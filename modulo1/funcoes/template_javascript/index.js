/* EXERCICIO DE INTERPRETAÇÃO 01
a) 
10
50
b) não vai aparecer nada no console.

EXERCICIO DE INTERPRETAÇÃO 02

a) true
b) true
c) true

*/

//EXERCICIO ESCRITA DE CÓDIGO

//1.a)

function quemSouEu(){
    console.log('Eu sou Gabriel,tenho 27 anos, moro em Porto Alegre e sou estudante')
}

//1.b)

function sobreMim(nome, idade, cidade, profissao){

return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`;
}
console.log(sobreMim("gabriel", 27, "alvorada", "estudante"))

//2.a)
function soma(num1, num2){
    const somas = num1 + num2

    return somas
}
console.log(soma(2,5))

//b)
function maiorIgual(numero1, numero2){
return numero1 >= numero2
}
console.log(maiorIgual(151,56))

//c)
function par(num){

const resultado = (num % 2) === 0

console.log( resultado)
}
par (22)

//d)
const letraD = function(palavra){

    const tamanho = palavra.length
    const maiusculo = palavra.toUpperCase()
    console.log(tamanho,maiusculo)
}
letraD("gabriel")


//3.a)
const operacoes = function(entrada1,entrada2){
    const soma = entrada1+entrada2
    const subtracao = entrada1-entrada2
    const divisao = entrada1/entrada2
    const multiplicacao = entrada1*entrada2

    console.log(`soma: ${soma}, subtração: ${subtracao}, divisão: ${divisao}, multiplicação: ${multiplicacao}.`)
}

const primeiroNumero = Number(prompt('Digite um número!'))
const segundoNumero = Number(prompt('Digite um número!'))

operacoes(primeiroNumero,segundoNumero)

//DESAFIO a)
const arrow1 = function(filho){
    console.log(filho)
}
const arrow2 = function (numero1,numero2){
  return numero1 + numero2 
}

arrow1(arrow2(2,4)) 

//DESAFIO 02

const pitagoras=function(cateto1, cateto2){
    return Math.sqrt(cateto1**2+cateto2**2)
    
}
console.log(pitagoras(3,6))
