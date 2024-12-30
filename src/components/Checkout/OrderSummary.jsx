// src/components/Checkout/CheckoutSummary.jsx
import { useCart } from '@/hooks/useCart';

export default function CheckoutSummary() {
    const { state } = useCart();

    const total = state.items.reduce((sum, item) =>
        sum + (item.price * item.quantity), 0
    );

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Resumen del pedido
            </h2>

            <div className="space-y-4 mb-6">
                {state.items.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                        <div className="flex-1">
                            <p className="font-medium text-gray-900 text-left">{item.title}</p>
                            <p className="text-sm text-gray-500 text-left">Cantidad: {item.quantity}</p>
                        </div>
                        <span className="text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex justify-between text-lg font-semibold text-gray-900 border-t pt-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
        </div>
    );
}