// src/context/CartContext.jsx
import { createContext } from 'react';
import { initialState } from './cartReducer';

export const CartContext = createContext({
    state: initialState,
    dispatch: () => {}
});