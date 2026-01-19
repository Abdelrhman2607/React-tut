import { HomePage } from './pages/HomePage.jsx'
import { CheckoutPage } from './pages/CheckoutPage.jsx'
import { OrdersPage } from './pages/OrdersPage.jsx'
import { TrackingPage } from './pages/TrackingPage.jsx'
import {Route, Routes} from 'react-router'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items').then((response) => {
            setCart(response.data);
        });
  }, []);

  return (
    <>
      <Routes>
        <Route index element = {<HomePage cart = {cart} />} />
        <Route path = 'checkout' element = {<CheckoutPage />} />
        <Route path = 'orders' element = {<OrdersPage />} />
        <Route path = 'tracking' element = {<TrackingPage />} />
      </Routes>
    </>
  )
}

export default App
