
//Exercicio 1
const checaTriangulo = (a:number,b:number,c:number): string =>{

    if (a !== b && b !== c) {
        
        return "Escaleno";
      } else if (a === b && b === c) {
        return "Equilátero";
      } else {
        return "Isósceles";
      }
}

console.log(checaTriangulo(20,22,10))

//Exercicio 2
const imprimeTresCoresFavoritas = ():void=>{

    const cor1:string = prompt("Insira sua primeira cor favorita");
    const cor2:string = prompt("Insira sua segunda cor favorita");
    const cor3:string = prompt("Insira sua terceira cor favorita");

    console.log([cor1,cor2,cor3])
}

imprimeTresCoresFavoritas()

//Exercicio 3
const checaAnoBissexto = (ano:number):boolean=>{
    if(ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0){
        return true
    }else{
        return false
    }
}

console.log(checaAnoBissexto(1975))

//Exercicio 4
const comparaDoisNumeros = (num1:number,num2:number):number=>{
    if(num1>num2){
        return num1-num2
    }else{
        return num2-num1
    }
}

console.log(comparaDoisNumeros(25,32))

//Exercicio 5
const checaRenovacaoRG = (anoAtual:number, anoNascimento:number, anoEmissao:number):string=>{
    const idade:number = anoAtual -anoNascimento
    const tempoCarteira:number = anoAtual - anoEmissao

    if(idade <= 0){
        return tempoCarteira >= 5?"passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
    }else if(idade > 20 && idade <=50){
        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
    }else if(idade > 50){
        return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
    }else{
        return "error"
    }
}

console.log(checaRenovacaoRG(2022,1994,2014))

//Exercicio 7

const converteRNA = ():string=>{
    const dna:string = "ATTGCTGCGCATTAACGACGCGTA";
    const dnaArray:Array<string> = dna.split("")

    const rnaArray:Array<string> = []
    dnaArray.map((letra:string)=>{
        switch (letra){
            case 'A':
                rnaArray.push('U');
                break
            case 'T':
                rnaArray.push('A');
                break
            case 'C':
                rnaArray.push('G');
                break
            case 'G':
                rnaArray.push('C');
                break
            default:
                return 'error';
        }
    })
    const rna = rnaArray.join("")
    return rna
}

console.log(converteRNA())

//Exercicio 8

const reverseString = (palavra:string):string=>{
    return palavra.split("").reverse().join("")
}

console.log(reverseString('olha'))
