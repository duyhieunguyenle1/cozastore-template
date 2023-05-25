import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [itemAmount, setItemAmount] = useState(0)
    const [total, setTotal] = useState(0)

    // set total 
    useEffect(() => {
        const total = cart.reduce((acc, cur) => acc + cur.price * cur.amount, 0)
        setTotal(total)
    })

    // update item amount
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((acc, cur) => {
                return acc + cur.amount
            }, 0)
            setItemAmount(amount)
        }
    })

    // add item to cart
    const addToCart = (product, id, countNumber) => {
        let newItem
        if (countNumber) newItem = { ...product, amount: countNumber }
        else newItem = { ...product, amount: 1 }

        const cartItem = cart.find(item => item.id === id);
        if (cartItem) {
            newItem = [...cart].map(item => {
                if (item.id === id) return { ...item, amount: item.amount + 1 }
                return item
            })
            setCart(newItem)
        } else setCart([...cart, newItem]);
    }

    // remove item from cart
    const removeFromCart = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart)
    }

    // clear all item from cart
    const clearCart = () => {
        setCart([]);
    }

    // increase item in cart
    const increaseAmount = (id) => {
        const increaseItem = [...cart].map(item => {
            if (item.id === id) return { ...item, amount: item.amount + 1 }
            return item
        })
        setCart(increaseItem)
    }

    // decrease item in cart
    const decreaseAmount = (id) => {
        const cartItem = cart.find(item => item.id === id)
        if (cartItem.amount < 2) {
            removeFromCart(id)
            return
        }
        if (cartItem) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return { ...item, amount: item.amount - 1 }
                }
                return item;
            })
            setCart(newCart)
        }
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                increaseAmount,
                decreaseAmount,
                itemAmount,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider