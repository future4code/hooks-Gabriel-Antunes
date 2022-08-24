import {v4 as idGen} from 'uuid';

export type product = {
    id:string,
    name:string,
    price:number
}

export const data:product[]=[
    {
        id:idGen(),
        name:'produto 01',
        price:100
    },
    {
        id:idGen(),
        name:'produto 02',
        price:200
    },
    {
        id:idGen(),
        name:'produto 03',
        price:300
    },
    {
        id:idGen(),
        name:'produto 04',
        price:400
    },
    {
        id:idGen(),
        name:'produto 05',
        price:500
    },
]
