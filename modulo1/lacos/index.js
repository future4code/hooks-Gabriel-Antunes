//1. está sendo somado no "valor" cada valor de i. o console.log será 10.
//2.a) Uma lista de todo numero dentro da array que for maior de 18.
//2.b)Sim, poderia apenas colocar ao invés de console.log(numero), colocar console.log(lista.indexof(numero))
// 3.  *
//     **
//     ***
//     ****

//escrita 01
let bichinhos = Number(prompt('Quantos animais de estimação você tem?'))
let listaBichinhos = []
let quantidade = 0

if (bichinhos > 0){
for(bichinhos ; bichinhos>0 ;){

    listaBichinhos.push(prompt('Digite o nome de seu bichinho de estimação'))
    quantidade++
    if (quantidade === bichinhos){
        break
    }
    
}
console.log(listaBichinhos)
}else{
    console.log('Que pena! Você pode adotar um pet!')
}

//escrita 02

let arrayOriginal = [23,43,3,54,5,6,7,3,11,2,11]
//a
let letraA = (arr) =>{
    console.log(arr)
}
letraA(arrayOriginal)

//b
let letraB = (arr) =>{
    let novaB = arr.map(function(num){
        return num/10
    })
    console.log(novaB)
}

letraB(arrayOriginal)

//c
let arrayPar = []
let letraC = (arr) =>{
for (let numeroPar of arr){
    if((numeroPar % 2) ===0 ){
        arrayPar.push(numeroPar)
    }
}console.log(arrayPar)
}
letraC(arrayOriginal)

//d
let arrayString = []
 function letraD (arr){
     let index = 0
       
    for (let item of arr){   
        
        arrayString.push(`O elemento do índex ${index} é: ${item}`)
        index++
    }console.log(arrayString)
} 
letraD(arrayOriginal)

//e
let letraE = (arr)=>{
    let numMaior = 0
    let numMenor = arr[0]
    for (num of arr){
        if (numMaior < num ){
            numMaior = num
        }
        
        if(numMenor > num){
            numMenor = num
        }
    }
    console.log(`O número maior do array é ${numMaior} e o menor é ${numMenor}`)
}
letraE(arrayOriginal)

// desafio
// 1
let numeroCerto = Number(prompt('Digite um número de 1 a 100!'))

let numeroChutado = 0

let contadorDesafio = 0

for (;;){
    numeroChutado = Number(prompt('Chute um número de 1 a 100!'))
    
    if (numeroChutado < numeroCerto){
        console.log('Errou! Tente um número maior!')
        contadorDesafio++
    }
    if (numeroChutado > numeroCerto){
        console.log('Errou! Tente um número menor!')
        contadorDesafio++
    }
    if (numeroChutado === numeroCerto){
        contadorDesafio++
        break
    }
}
console.log('Acertou!')
console.log(`O número de tentativas foi: ${contadorDesafio}`)


//2
let sortearNumero = (min,max) =>{
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numeroCertoD2 = sortearNumero(1,100)
console.log(numeroCertoD2)


let numeroChutadoD2 = 0

let contadorDesafioD2 = 0

for (;;){
    numeroChutadoD2 = Number(prompt('Chute um número de 1 a 100!'))
    if (numeroChutadoD2 < 1){
        break
    }
    if (numeroChutadoD2 < numeroCertoD2){
        console.log('Errou! Tente um número maior!')
        contadorDesafioD2++
    }
    if (numeroChutadoD2 > numeroCertoD2){
        console.log('Errou! Tente um número menor!')
        contadorDesafioD2++
    }
    if (numeroChutadoD2 === numeroCertoD2){
        contadorDesafioD2++
        console.log('Acertou!')
        console.log(`O número de tentativas foi: ${contadorDesafioD2}`)
        break
    }
    
    
}

//A lógica foi fácil, já tinha em mente que era só substiuit o prompt por um random, mas entender como era o processo pro número random ser um inteiro, isso foi o que mais demorou para entrar na minha cabeça.
