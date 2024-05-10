'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function ProductsPage() {
  const [products, setProducts] = useState([])

  async function getAllProducts() {
    const fetchProducts = await axios.get('/products')
    .then((res) => setProducts(res.data.products))
    .catch((err) => console.log("err is", err)) 
  }
  useEffect(() => {
   getAllProducts()
  },[])
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
