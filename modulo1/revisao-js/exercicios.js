// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    copiaArray = array
    novaArray = []

    while (copiaArray.length > 0){
        novaArray.push(copiaArray.pop())
    }
    return novaArray
}   

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b)=> a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novaArray = array.filter((item)=>{
        return item % 2 === 0
    })
    
    return novaArray  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novaArray = array.filter((item)=>{
        return item % 2 === 0
    })
    return novaArray.map((item)=>{
        return item**2
    })    
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    numMaior = array[0]
    for (num of array){
        if (num > numMaior){
            numMaior = num
        }
    }
    return numMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 > num2){
        maiorNumero = num1
    }else{
        maiorNumero = num2
    }
    if (num1 > num2){
        maiorDivisivelPorMenor = num1 % num2 === 0
    }else{
        maiorDivisivelPorMenor = num2 % num1 === 0
    }
    if (num1 > num2){
        diferenca = num1 - num2
    }else{
       diferenca = num2 - num1 
    }

    return {maiorNumero, maiorDivisivelPorMenor, diferenca}
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arr = []
    let i = 0
    for (;;){
        if (arr.length < n){
            if (i % 2 === 0){
                arr.push(i)
                i++
            }else{
                i++
            }
        }else{
            break
        }
    }
    return arr 
} 

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    }
    if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
        return "Escaleno"
    } else{
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let novaArray = array.sort((a,b)=> a-b)
    return [novaArray[novaArray.length -2],novaArray[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join([separador = ', '])}.`  
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = 'ANÔNIMO'
    return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = pessoas.filter((item)=>{
        return (item.altura >= 1.5 && item.idade > 14 && item.idade <60)
    
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((item)=>{
        return (item.altura <= 1.5 || item.idade <= 14 || item.idade >= 60)
    })
    return pessoasNaoAutorizadas 
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for(;;){
        let contador = 0
        if (contador < contas.length){

        let compras = (contas[contador].compras)
        let soma = compras.reduce((prev, compras)=>prev+compras,0)
    
        contas[contador].saldoTotal = contas[contador].saldoTotal - soma
        contas[contador].compras = []
        contador++
        
        }
        return contas
    }
  
}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
}
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {


}
