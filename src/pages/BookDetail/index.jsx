// src/pages/BookDetail/index.jsx
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '@/hooks/useCart'
import { books } from '@/data/books'
import { ShoppingCart, ArrowLeft } from 'lucide-react'

export default function BookDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { addToCart } = useCart()
    const [quantity, setQuantity] = useState(1)

    // Encontrar el libro por ID
    const book = books.find(book => book.id === parseInt(id))

    if (!book) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Libro no encontrado</h2>
                <button
                    onClick={() => navigate('/home')}
                    className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700"
                >
                    <ArrowLeft className="mr-2" size={20} />
                    Volver al catálogo
                </button>
            </div>
        )
    }

    const handleAddToCart = () => {
        // Añadir la cantidad seleccionada al carrito
        for (let i = 0; i < quantity; i++) {
            addToCart(book);
        }
        // Resetear la cantidad
        setQuantity(1)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <button
                onClick={() => navigate('/home')}
                className="mb-6 inline-flex items-center text-primary-600 hover:text-primary-700"
            >
                <ArrowLeft className="mr-2" size={20} />
                Volver al catálogo
            </button>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Imagen del libro */}
                <div className="aspect-w-3 aspect-h-4 relative">
                    <img
                        src={book.cover}
                        alt={book.title}
                        className="rounded-lg shadow-lg object-cover w-full h-auto max-w-xs mx-auto"
                    />
                </div>

                {/* Detalles del libro */}
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2 text-left">
                        {book.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-4 text-left">
                        por {book.author}
                    </p>

                    <div className="prose max-w-none mb-6 text-justify">
                        <p className="text-gray-700">{book.description}</p>
                    </div>

                    <div className="mt-auto">
                        <div className="flex items-baseline mb-4">
                            <span className="text-3xl font-bold text-primary-600">
                                €{book.price.toFixed(2)}
                            </span>
                        </div>

                        <div className="flex items-center space-x-4 mb-4">
                            <label htmlFor="quantity" className="font-medium text-gray-700">
                                Cantidad:
                            </label>
                            <select
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="rounded border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                            >
                                {[1, 2, 3, 4, 5].map(num => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 flex items-center justify-center"
                        >
                            <ShoppingCart className="mr-2" size={20} />
                            Añadir al carrito
                        </button>

                        {book.isbn && (
                            <p className="mt-4 text-sm text-gray-500">
                                ISBN: {book.isbn}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}