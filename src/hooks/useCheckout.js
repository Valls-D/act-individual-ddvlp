//src/hooks/useCheckout.js
import { useState } from 'react';
import { useCart } from './useCart';

export function useCheckout() {
    const { clearCart } = useCart();
    const [loading, setLoading] = useState(false);

    const processCheckout = async () => {
        setLoading(true);
        try {
            // Simulamos procesamiento de pago
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Limpiamos el carrito
            clearCart();

            // Retornamos true para indicar éxito
            return true;
        } catch (error) {
            console.error('Error processing checkout:', error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { processCheckout, loading };
}
