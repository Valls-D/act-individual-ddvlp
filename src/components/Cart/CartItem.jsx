// src/components/Cart/CartItem.jsx
import PropTypes from 'prop-types'
import { X, Minus, Plus } from 'lucide-react'
import { useCart } from '@/hooks/useCart'

export default function CartItem({ item }) {
    const { removeFromCart, updateQuantity } = useCart()

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(item.id)
        } else {
            updateQuantity(item.id, newQuantity)
        }
    }
    return (
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={item.cover}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.title}</h3>
                        <p className="ml-4">€{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.author}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => handleQuantityChange(item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                        >
                            <Minus size={16} />
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                        >
                            <Plus size={16} />
                        </button>
                    </div>

                    <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="font-medium text-primary-600 hover:text-primary-500"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </li>
    )
}
CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        cover: PropTypes.string.isRequired,
    }).isRequired,
}