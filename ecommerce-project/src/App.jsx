import { HomePage } from './pages/home/HomePage.jsx'
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx'
import { OrdersPage } from './pages/OrdersPage.jsx'
import { TrackingPage } from './pages/TrackingPage.jsx'
import {Route, Routes} from 'react-router'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
  }

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route index element = {<HomePage cart = {cart} loadCart = {loadCart} />} />
        <Route path = 'checkout' element = {<CheckoutPage cart = {cart} loadCart = {loadCart} />} />
        <Route path = 'orders' element = {<OrdersPage cart = {cart} />} />
        <Route path = 'tracking' element = {<TrackingPage />} />
      </Routes>
    </>
  )
}

export default App
