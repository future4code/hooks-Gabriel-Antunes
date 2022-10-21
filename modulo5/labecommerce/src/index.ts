import {app} from './app'
import createProduct from './endpoints/createProduct'
import createPurchase from './endpoints/createPurchase'
import createUser from './endpoints/createUser'
import getProducts from './endpoints/getProducts'
import getUserPurchases from './endpoints/getUserPurchases'
import getUsers from './endpoints/getUsers'


app.post('/user',createUser)

app.get('/users',getUsers)

app.get('/users/:user_id/purchases', getUserPurchases)

app.post('/products', createProduct)

app.get('/products', getProducts)

app.post('/purchases', createPurchase)
