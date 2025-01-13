import express from 'express'
import { allproducts } from './allproducts.mjs'
import cors from'cors';


const app = express()
const port =process.env.PORT || 3000
const products = []

app.use(cors({origin:["https://waggish-bat.surge.sh","http://localhost:3000"]}))
app.use(express.json())


// app.get('/', (req, response) => {
//   //  console.log(`Hello World! from ${req.params.id}`);
//     response.send(`Hello World! from Omais`);
//   })

// app.get('/AllProducts', (req, response) => {
//   response.send(allproducts);
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
  
app.get('/', (request, response) => {
  console.log("ye hy request: ", request.ip);

  response.send(`Hello World 2`)
})

app.get('/products', (request, response) => {

  response.send({ message: "All products fetched successfully", status: 200, data: products, })
})

app.get('/product/:id', (request, response) => {
  const index = Number(request.params.id) - 1

  const product = products[index]

  if (!product) {
      response.status(404).send({ data: null, message: 'product not found' })
      return;
  }

  response.status(200).json({ data: product, message: "Product found successfully" })
})

app.post('/product', (request, response) => {
  console.log("request ki body: ", request.body);

  const product = request.body

  if (!request.body.productName) {
      response.status(400).send('name bhi tw batao product ka')
      return;
  }

  products.push(product)

  response.status(201).send("product added successfully!")
})

app.use((request, response) => {
  response.status(404).send("no route found!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})