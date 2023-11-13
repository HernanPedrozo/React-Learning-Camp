import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className='App'>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Catalogo'/> }/>
          <Route path='/category/:categoryId' element={ <ItemListContainer greeting="catalogo"/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

