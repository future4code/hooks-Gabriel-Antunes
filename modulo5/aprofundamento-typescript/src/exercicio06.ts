const descobrirIdadeHistorica = (ano:number,sigla?:string):string=>{

    if (sigla === "AC"){
        if(ano>4000){
            return 'Pré-história'
        }else{
            return 'Idade Antiga'
        }
    }else if(sigla === "DC" || sigla===undefined){
        if(ano<476){
            return 'Idade Antiga'
        }else if(ano >= 476 && ano <1453){
            return 'Idade Média'
        }else if(ano >=1453 && ano < 1789){
            return 'Idade Moderna'
        }else if(ano>=1789){
            return 'Idade Contemporânea'
        }else{
            return 'Erro! Parâmetros inválidos'
        }
    }else{
        return 'Parâmetros inválidos. Informe um ano juntamente com "AC" ou "DC"'
    }
       
    
}

console.log(descobrirIdadeHistorica(5000, 'AC'))

