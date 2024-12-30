// src/components/Books/BookCard.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function BookCard({ book , onAddToCart }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <div className="book-card bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/book/${book.id}`} className="block relative">
                {/* Contenedor de imagen con placeholder */}
                <div className="relative h-64">
                    {/* Placeholder mientras carga */}
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    )}

                    {/* Imagen principal */}
                    <img
                        loading="lazy"
                        src={book.cover}
                        alt={book.title}
                        className={`h-full w-full object-cover transition-opacity duration-300 ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => setImageLoaded(true)}
                        onError={(e) => {
                            e.target.src = `https://via.placeholder.com/200x300?text=${encodeURIComponent(book.title)}`
                            setImageLoaded(true)
                        }}
                    />
                </div>
            </Link>

            <div className="p-4">
                <Link
                    to={`/book/${book.id}`}
                    className="text-lg font-semibold hover:text-primary-600"
                >
                    <h3>{book.title}</h3>
                </Link>

                <p className="text-gray-600 mt-1">{book.author}</p>
                {book.category && (
                    <span className="text-sm text-gray-500">{book.category}</span>
                )}

                <div className="mt-4 flex justify-between items-center">
                    <p className="font-bold text-primary-600">
                        €{book.price.toFixed(2)}
                    </p>
                    <button
                        onClick={onAddToCart}
                        className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors duration-200"
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}
BookCard.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        cover: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        isbn: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
};