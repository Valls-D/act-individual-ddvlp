// Checkout.jsx

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { useCheckout } from '@/hooks/useCheckout';
import CheckoutSummary from '@/components/Checkout/OrderSummary';
import ShippingForm from '@/components/Checkout/ShippingForm';

export default function Checkout() {
    const navigate = useNavigate();
    const { state: { items }, clearCart } = useCart();
    const { processCheckout, loading } = useCheckout();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Redireccionar si el carrito está vacío
    useEffect(() => {
        if (items.length === 0 && !success) {
            navigate('/home');
        }
    }, [items, navigate, success]);

    const handleSubmit = async (shippingData) => {
        try {
            setError(null);  // Limpiar errores previos
            const isSuccess = await processCheckout(shippingData);  // Procesar el checkout

            if (isSuccess) {
                setSuccess(true);  // Marcar el éxito
                clearCart();  // Vaciar el carrito
                alert('¡Pedido completado! Gracias por tu compra.');  // Mostrar alerta
                navigate('/home');  // Redirigir a la página principal
            } else {
                setError('Hubo un error procesando tu pedido. Por favor, inténtalo de nuevo.');
            }
        } catch (err) {
            setError('Hubo un error procesando tu pedido. Por favor, inténtalo de nuevo.');
            console.error('Checkout error:', err);
        }
    };

    if (items.length === 0 && !success) {
        return null; // No mostrar nada si el carrito está vacío
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Finalizar compra</h1>
                <p className="mt-2 text-gray-600">
                    Por favor, completa los detalles de envío para procesar tu pedido.
                </p>
            </div>

            {/* Grid de contenido */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Formulario de envío */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        Información de envío
                    </h2>

                    <ShippingForm
                        onSubmit={handleSubmit}  // Pasamos la función handleSubmit aquí
                        loading={loading}
                        disabled={success}
                    />

                    {error && (
                        <div className="text-red-500 mt-4">
                            {error}  {/* Mostrar error si lo hay */}
                        </div>
                    )}
                </div>

                {/* Resumen del pedido */}
                <div className="space-y-6">
                    <CheckoutSummary />  {/* Resumen del carrito */}

                    <button
                        type="submit"
                        form="shipping-form"  // Asegúrate de que el botón esté asociado al formulario
                        disabled={loading || success}
                        className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm
                                 text-white bg-primary-600 hover:bg-primary-700
                                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
                                 disabled:opacity-50 disabled:cursor-not-allowed
                                 transition-colors duration-200"
                    >
                        {loading ? 'Procesando...' : success ? '¡Pedido completado!' : 'Completar pedido'}
                    </button>
                </div>
            </div>
        </div>
    );
}
