import { useContext } from 'react'
import ItemList from '../ItemList/ItemList'
import { ProductsContext } from '../context/ProductsContextProvider'; 
import propTypes from "prop-types";
import './ItemListContainer.css'

function ItemListContainer({title}) {

const {products, isLoading } = useContext(ProductsContext);

if (isLoading){
return <h1>Cargando...</h1>
}

return (
<div className="ItemListContainer">
    <h1 className="title">{title}</h1>
    <ItemList products={products} />
</div>
)
}

ItemListContainer.propTypes = {
    title: propTypes.string.isRequired,
};



export default ItemListContainer