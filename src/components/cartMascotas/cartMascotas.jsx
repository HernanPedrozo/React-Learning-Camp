import React from 'react'
import { useState } from 'react'

function CartMascotas({name, edad, raza, image, price, }) {
    const [Like, setLike] = useState(true);
return (
    <>
    <article className="CardItem">
                <header className="Header">
                <h3 className="ItemHeader"> {name} </h3>  
                <p className=''>{raza}</p>
                <p className=''>{edad}</p>
                </header>
                <picture>
                <img src={image} alt={name} className="ItemImg"/>
                </picture>
        <section> 
            <p className="Info">${price}</p>
        </section>
        <footer className="ItemFooter">
        <a>Me gusta</a>
        </footer> 
        </article>
        </>
    )
}
export default CartMascotas