// type para tipar no typescript com camelCase
export class Purchase {
    public id:string = Date.now().toString()
    public totalPrice:number
    constructor(
       public userId: string,
       public productId: string,
       public quantity: number,
       public price: number
    ){
        this.userId = userId,
        this.productId = productId,
        this.quantity = quantity,
        this.totalPrice = quantity * price
    }
   
}

// type para tipar no banco de dados com snake_case
export type PurchaseDB = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}