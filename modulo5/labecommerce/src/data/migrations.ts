import {connection} from './connection'
import products from './products.json'
import purchases from './purchases.json'
import users from './users.json'



const printError = (error:any) => {console.log(console.log(error.sqlMesage || error.message))}

const createTables = () => connection.raw(`
    CREATE TABLE IF NOT EXISTS labecommerce_users (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
    );  

    CREATE TABLE IF NOT EXISTS labecommerce_products (
        id VARCHAR(255) PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL UNIQUE,
        price INT NOT NULL,
        image_url VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS labecommerce_purchases (
        id VARCHAR(255) PRIMARY KEY NOT NULL,
        user_id VARCHAR(255) NOT NULL,
        product_id VARCHAR(255) NOT NULL,
        quantity INT NOT NULL,
        total_price INT NOT NULL,
        FOREIGN KEY(user_id) REFERENCES labecommerce_users(id),
        FOREIGN KEY(product_id) REFERENCES labecommerce_products(id)
    );

`)
.then(()=>{console.log('Tabelas criadas')})
.catch(printError)

const insertUsers = () => connection("labecommerce_users")
   .insert(users)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const insertProducts = () => connection("labecommerce_products")
   .insert(products)
   .then(() => { console.log("Produtos criados") })
   .catch(printError)

const insertPurchases = () => connection("labecommerce_purchases")
   .insert(purchases)
   .then(() => { console.log("Compras criadas") })
   .catch(printError)

const closeConnection = () => {connection.destroy()}

createTables()
    .then(insertUsers)
    .then(insertProducts)
    .then(insertPurchases)
    .finally(closeConnection)