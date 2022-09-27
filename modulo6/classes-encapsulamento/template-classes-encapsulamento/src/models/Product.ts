export class Product {
    public id:string = Date.now().toString()
    constructor(
       public name:string,
       public price:number
    ){
        this.name = name,
        this.price = price
    }
   
}

