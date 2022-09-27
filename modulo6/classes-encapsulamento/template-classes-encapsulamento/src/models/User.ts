export class User{
    public id:string = Date.now().toString()
    constructor(
        public email:string,
        public password:string
    ){
        this.email = email,
        this.password = password
    }
}