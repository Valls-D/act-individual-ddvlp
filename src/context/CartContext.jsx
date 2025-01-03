// src/context/CartContext.jsx
import { createContext } from 'react';
import { initialState } from './CartReducer.jsx';

export const CartContext = createContext({
    state: initialState,
    dispatch: () => {}
});