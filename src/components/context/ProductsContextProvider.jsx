import { createContext, useState, useEffect } from "react";
import { getProducts } from '../../asyncMock'
import propTypes from "prop-types";

export const ProductsContext = createContext ();

export const ProductsContextProvider = ({childrren}) => {
    const [products, setProducts] = useState ([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getProducts().
        then(products => {
        setProducts(products);
        })
        .finally(() =>{
        setLoading(false);
        });
        }, []);

        return (
            <ProductsContext.Provider value={{products, isLoading}}>
                {children}
            </ProductsContext.Provider>
        );
        };

        ProductsContextProvider.proTypes = {
            children: propTypes.node.isRequired,
        };




