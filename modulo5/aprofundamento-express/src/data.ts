import {v4 as idGenerator} from 'uuid';

export type tarefa={
    id:string,
    userId:number,
    name:string,
    completed:boolean
}

export const tarefasDB:tarefa[] = [
    {
        id:idGenerator(),
        userId:1,
        name:'Tarefa 01',
        completed:false
    },
    {
        id:idGenerator(),
        userId:1,
        name:'Tarefa 02',
        completed:true
    },
    {
        id:idGenerator(),
        userId:1,
        name:'Tarefa 03',
        completed:true
    },
    {
        id:idGenerator(),
        userId:2,
        name:'Tarefa 04',
        completed:false
    },
    {
        id:idGenerator(),
        userId:2,
        name:'Tarefa 05',
        completed:false
    },
    {
        id:idGenerator(),
        userId:2,
        name:'Tarefa 04',
        completed:false
    },
    {
        id:idGenerator(),
        userId:2,
        name:'Tarefa 05',
        completed:false
    },  {
        id:idGenerator(),
        userId:2,
        name:'Tarefa 06',
        completed:false
    },
    {
        id:idGenerator(),
        userId:2,
        name:'Tarefa 07',
        completed:true
    },

]