import express from 'express'
import { allproducts } from './allproducts.mjs'
import cors from'cors';


const app = express()
const port =process.env.PORT || 3000
app.use(cors())

app.get('/', (req, response) => {
  //  console.log(`Hello World! from ${req.params.id}`);
    response.send(`Hello World! from Omais`);
  })

app.get('/Products', (req, response) => {
  response.send({name:'Lemon',price:180,quantity:'1kg'});
})

app.get('/AllProducts', (req, response) => {
  response.send(allproducts);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  