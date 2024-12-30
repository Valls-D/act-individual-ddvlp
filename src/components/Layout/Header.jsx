// src/components/Layout/Header.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Book } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import CartDrawer from '@/components/Cart/CartDrawer'
import PropTypes from 'prop-types'

export default function Header({ onSearch }) {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const { state } = useCart()
    const [searchTerm, setSearchTerm] = useState('')

    const totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0)

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    }

    return (
        <>
            <header className="bg-primary-400 text-black shadow-md py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center space-x-2 font-bold text-3xl text-white hover:text-primary-200 transition-colors"
                        >
                            <Book size={32} />
                            <span>Relatos de Papel</span>
                        </Link>

                        {/* Barra de búsqueda */}
                        <div className="relative flex-grow max-w-lg"> {/* Más espacio para la barra */}
                            <input
                                type="text"
                                placeholder="Buscar por título o autor..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8 16l8-8M16 8l-8 8"
                                    />
                                </svg>
                            </span>
                        </div>

                        {/* Carrito */}
                        <div className="flex items-center">
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="p-2 hover:bg-primary-600 rounded-full relative transition-colors"
                            >
                                <ShoppingCart size={24} />
                                {totalQuantity > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-primary-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {totalQuantity}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Cart Drawer */}
            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </>
    )
}

Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
}