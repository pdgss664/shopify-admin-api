const express = require('express');
const app = express()
const Shopify = require('shopify-api-node');
const PORT = process.env.PORT || 4000
require('dotenv').config()
var cors = require('cors');
app.use(cors());

const shopify = new Shopify({
  shopName: process.env.SHOPNAME,
  apiKey: process.env.APIKEY,
  password: process.env.PASSWORD
});

app.get('/', (req, res) => {
    res.send("sever is running on port 4000")
})

app.get('/products', async(req, res) => {
    console.log("products")
   await shopify.product
  .list({ limit: 10 })
  .then((product) => {
    res.status(200).json({
        products: product,
      });
  }
)
  .catch((err) => console.error(err));
})

app.get('/orders', async(req, res) => {
    console.log("orders")
    await shopify.order
   .list({ limit: 5 })
   .then((order) => {
    res.status(200).json({
        orders: order,
      });
   })
   .catch((err) => console.error(err));
 })
 
 if(process.env.NODE_ENV === 'production') {
  app.use(express.static('prac/.next'))
}

app.listen(PORT,() => console.log(`server is running on ${PORT}`))