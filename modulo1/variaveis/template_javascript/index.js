/* 
interpretação 01:
console.log(b): 10
console.logo(a, b): 10, 5

interpretação 02:
console.log(a,b,c): 10 10 10

interpretação 03:
p= horasTrabalhadasDia
t= pagamentoDia */

// escrita de codigo 01
let nome 
let idade

console.log(typeof nome, typeof idade)
// foi impresso undefined por que não foi atribuido nenhum valor para as variáveis.

nome = prompt("Qual seu nome?")
idade = prompt("qual sua idade?")

console.log(typeof nome, typeof idade)
//agora que os valores foram atribuidos através de solicitação ao usuário, são consideradas "strings".
console.log('Olá',nome, 'você tem',idade,'anos')


//escrita de codigo 02
let conhecimentoHtml = prompt("Você sabia sobre HTML?")
let conhecimentoCss = prompt("Você sabia sobre CSS?")
let conhecimentoJs = prompt("Você sabia sobre Javascript?")

let respostaHtml = conhecimentoHtml
let respostaCss = conhecimentoCss
let respostaJs = conhecimentoJs


console.log('Você sabia sobre HTML? -', respostaHtml)
console.log('Você sabia sobre CSS? -', respostaCss)
console.log('Você sabia sobre Javascript? -', respostaJs)


//escrita de codigo 03
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let newA = b
let newB = a

a = newA 
b = newB

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


//escrita de codigo DESAFIO 

let primeiroValor = prompt('Digite um número:')
let segundoValor = prompt('Digite outro númeor:')

let primeiroNumero = Number(primeiroValor)
let segundoNumero = Number(segundoValor)

console.log('X:', primeiroNumero + segundoNumero)
console.log('Y:', primeiroNumero * segundoNumero)


