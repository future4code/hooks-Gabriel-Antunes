// //INTERPRETAÇÃO 01

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) //a. false
// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) //b. false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) //c. true

// console.log("d. ", typeof resultado) //boolean

// //INTERPRETAÇÃO 02

// let primeiroNumero = prompt("Digite um numero!") //ex: 10
// let segundoNumero = prompt("Digite outro numero!") //ex: 20

// const soma = primeiroNumero + segundoNumero

// console.log(soma) //será impresso 1020 pois as variaveis são do tipo string. 

// //INTERPRETAÇÃO 03

// //Para dar certo, deverá ser convertido as variaveis em número:
// //const soma = Number(primeiroNumero) + Number(segundoNumero)


//ESCRITA 01

let idadeUsuario = prompt('Qual sua idade?')
let idadeAmigo = prompt('Qual idade de seu melhor amigo?')
let comparacaoIdade 
comparacaoIdade = Number(idadeUsuario) > Number(idadeAmigo)

console.log('Sua idade é maior do que a do seu melhor amigo? -',comparacaoIdade) 
console.log(Number(idadeUsuario) - Number(idadeAmigo))

//ESCRITA 02

let numeroPar = prompt("Insira um número par.")
console.log(Number(numeroPar) % 10) 
//resto de números pares na divisão por dois sempre será zero.
//resto de números ímpares na divisão por dois, sempre será 1.

//ESCRITA 03

let idade = prompt("Quantos anos você tem?")

console.log('Sua idade em meses é:', Number(idade)*12,'meses.')
console.log('Sua idade em dias é:', Number(idade)*365, 'dias.')
console.log('Sua idade em horas é:', Number(idade)*365*24, 'horas.')

//ESCRITA 04
let numeroUm = prompt("Digite um número.")
let numeroDois = prompt("Digite outro número.")


console.log('O primeiro numero é maior que segundo?', Number(numeroUm) > Number(numeroDois))
console.log('O primeiro numero é igual ao segundo?', Number(numeroUm) == Number(numeroDois))
console.log('O primeiro numero é divisível pelo segundo?',  Number(numeroUm) / Number(numeroDois)>=1)
console.log('O segundo numero é divisível pelo primeiro?', Number(numeroDois)/Number(numeroUm) >=1)

//DESAFIO 01
//a
let temperaturaFahrenheitA = 77
let resultadoKelvinA = ((temperaturaFahrenheitA - 32) * 5/9 + 273.15)

console.log('', temperaturaFahrenheitA, "Fahrenheit em Kelvin é:", resultadoKelvinA, 'K')
//b
let temperaturaCelsiusB = 80
let resultadoFahrenheitB = temperaturaCelsiusB * (9/5) + 32

console.log('',temperaturaCelsiusB,'graus celsius em Fahrenheit é:',resultadoFahrenheitB,'°F')
//c
let temperaturaCelsiusC = 30

let resultadoFahrenheitC = temperaturaCelsiusC * (9/5) + 32
let resultadoKelvinC = temperaturaCelsiusC + 273.15

console.log('',temperaturaCelsiusC,'°C em Fahrenheit é', resultadoFahrenheitC, '°F. E em Kelvin é', resultadoKelvinC,'K')

// //d

let temperaturaCelsiusD = prompt ("Digite uma temperatura em graus Celsius")

let resultadoFahrenheitD = Number(temperaturaCelsiusD) * (9/5) + 32
let resultadoKelvinD = Number(temperaturaCelsiusD) + 273.15

console.log('',temperaturaCelsiusD,'°C em Fahrenheit é', resultadoFahrenheitD, '°F. E em Kelvin é', resultadoKelvinD,'K')

//DESAFIO 02
//a
let custoKWH = 0.05
let consumoResidencia = 280
let gastoMensal = custoKWH*consumoResidencia

console.log('O custo para o consumo de',consumoResidencia,'Quilowatt-hora é de',gastoMensal,'Reais')

//b
let desconto = 1-.15 

console.log('O valor após desconto é de',gastoMensal * desconto,'Reais')

//DESAFIO 03

//a
let pesoLibra = 20
let pesoQuiloA = pesoLibra/2.205

console.log('',pesoLibra,'lb equivale a',pesoQuiloA,'kg')

//b 
let pesoOnça = 10.5
let pesoQuiloB  = pesoOnça / 35.274

console.log('',pesoOnça,'oz equivalem a',pesoQuiloB,'kg')

//c
let distanciaMilha = 100
let distanciaMetroC = distanciaMilha * 1609

console.log('',distanciaMilha,'mi equivalem a',distanciaMetroC,'m')

//d
let distanciaPes = 50
let distanciaMetroD = distanciaPes/ 3.281

console.log('',distanciaPes,'ft equivalem a',distanciaMetroD,'m')

//e
let volumeGalao = 103.56
let volumeLitroE = volumeGalao * 3.785

console.log('',volumeGalao,'gal equivalem a',volumeLitroE,'l')

//f
let volumeXicara = 450
let volumeLitroF = volumeXicara * 0.24

console.log('',volumeXicara,'xic equivalem a',volumeLitroF,'l')

//g
let volumeXicaraG = prompt("Digite a quantidade em Xícaras:")
let volumeLitroG = Number(volumeXicaraG)*0.24

console.log('',volumeXicaraG,'xic equivalem a',volumeLitroG,'l')



