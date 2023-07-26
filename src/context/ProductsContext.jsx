import { createContext, useContext, useEffect, useState } from "react";
import { apiProducts } from "../service/products";

export const ProductsContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductsContextProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const getProduct = async () => {
        try {
            const res = await fetch(apiProducts())
            if (!res.ok) {
                throw Error('No se pudo conectar con el servidor')
            }
            const data = await res.json();
            setProducts(data)
        }

        catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getProduct()

    },[])



    return (
        <ProductsContext.Provider value={{products}}>
        {children}
        </ProductsContext.Provider>

    )    
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProductsContext = () => useContext(ProductsContext)