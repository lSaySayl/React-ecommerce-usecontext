import { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartContextProvider = ({children}) => {

    //Increment product
    const [count,setCount] = useState(0);

    // Open and close product detail
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false);

    const [productToShow,setProductShow] = useState({
        title: "",
        price: 0,
        category: "",
        alt: "",
        image: ""
    })


    const showProduct = (title, price, category, alt, image) => {
        setProductShow({
          title,
          price,
          category,
          alt,
          image
        });
      };

    const openProductDetail = () => {
        setIsProductDetailOpen(true)
    }

    const closeProductDetail = () => {
        setIsProductDetailOpen(false)
    }
    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductShow,
            showProduct
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingCartContext = () => useContext(ShoppingCartContext)