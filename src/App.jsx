import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductsContextProvider } from './components/context/ProductsContextProvider'

function App() {

  return (
    <div className='App'>
    <ProductsContextProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer title='Catalogo'/> }/>
        </Routes>
      </BrowserRouter>
      </ProductsContextProvider>
    </div>
  )
}

export default App

