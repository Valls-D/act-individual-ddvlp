// src/context/CartProvider.jsx
import { useReducer } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from './CartContext';
import { cartReducer, initialState } from './cartReducer';

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState,initialState => initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
