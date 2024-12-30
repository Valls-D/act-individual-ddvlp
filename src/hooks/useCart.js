// src/hooks/useCart.js
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function useCart() {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart debe usarse dentro de un CartProvider')
    }

    const { state, dispatch } = context

    // Funciones para el carrito
    const addToCart = (book) => {
        dispatch({ type: 'ADD_TO_CART', payload: book })
    }

    const removeFromCart = (bookId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: bookId })
    }

    const updateQuantity = (bookId, quantity) => {
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { id: bookId, quantity: Math.max(0, quantity) }
        })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    return {
        state,
        dispatch,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
    }
}