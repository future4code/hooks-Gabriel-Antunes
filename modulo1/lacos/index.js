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
