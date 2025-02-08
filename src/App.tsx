import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/common/NavBar'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import { SignIn, SignUp } from '@clerk/clerk-react'

function App() {
  return (
  <div>
    <NavBar />
    
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='login' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
    </Routes>
  </div>

  )
}

export default App
