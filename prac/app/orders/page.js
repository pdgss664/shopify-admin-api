'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function OrdersPage() {
  const [orders, setOrders] = useState([])

  async function getAllOrders() {
    const fetchOrders = await axios.get('/orders')
    .then((res) => setOrders(res.data.orders))
    .catch((err) => console.log("err is", err)) 
  }
  useEffect(() => {
   getAllOrders()
  },[])
  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersPage;
