export enum Type {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
export type user = {
    id:number,
    name:string,
    email:string,
    type: Type,
    age:number
}
export const users:user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: Type.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: Type.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: Type.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: Type.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: Type.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: Type.ADMIN,
        age: 60
    }
]
