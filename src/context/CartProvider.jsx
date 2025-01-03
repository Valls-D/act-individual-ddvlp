// src/context/CartProvider.jsx
import { useReducer } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from './CartContext.jsx';
import { cartReducer, initialState } from './CartReducer.jsx';

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
