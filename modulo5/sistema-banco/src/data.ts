export type user = {
    cpf:number,
    name:string,
    birthDate:EpochTimeStamp | string,
    balance:number,
    statement:transactions[] 

}

export type transactions = {
    value:number,
    date:EpochTimeStamp | string,
    description:string,
}

export const data:user[]=[
    {
        cpf:18209875078,
        name:'nome 01',
        birthDate:'01/07/1990',
        balance:0,
        statement:[]
    },
    {
        cpf:45603841001,
        name:'nome 02',
        birthDate:'22/03/2000',
        balance:0,
        statement:[]
    },
    {
        cpf:78555623030,
        name:'nome 03',
        birthDate:'06/04/1975',
        balance:0,
        statement:[]
    },
    {
        cpf:91202256015,
        name:'nome 04',
        birthDate:'14/02/1981',
        balance:0,
        statement:[]
    },
    {
        cpf:95654633040,
        name:'nome 05',
        birthDate:'21/05/1961',
        balance:0,
        statement:[]
    },
]

