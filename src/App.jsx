import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Product from './pages/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
  <main className="bg-primary text-tertiary">
   <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Category />}/>
        <Route path='/' element={<Category />}/>
        <Route path='/' element={<Category />}/>
        <Route path='/' element={<Product />}/>
         {/* <Route path=':productId' element={<Category />}/> */}
        <Route path='/' element={<Cart />}/>
        <Route path='/' element={<Login />}/>
      </Routes>
   </BrowserRouter>
  </main>
  )
}

export default App
