import { useState } from 'react'
import './App.css'
import CartMascotas from './components/cartMascotas/cartMascotas'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartMascotas name="Charlie" edad="5" raza="caniche" price= {20000} />
    </>
  )
}

export default App

