import { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartContextProvider = ({children}) => {

    const [count,setCount] = useState(0)
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingCartContext = () => useContext(ShoppingCartContext)