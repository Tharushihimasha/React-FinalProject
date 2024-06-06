import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
  <main className="bg-primary text-tertiary">
   <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
   </BrowserRouter>
  </main>
  )
}

export default App
