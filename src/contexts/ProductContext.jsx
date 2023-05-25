import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(8);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("https://fakestoreapi.com/products")
            setProducts(response.data)
        }
        fetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={{
            products,
            visible,
            setVisible
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider