// src/components/Books/BookGrid.jsx
import { useCart } from '@/hooks/useCart';
import BookCard from './BookCard';
import PropTypes from 'prop-types';

export default function BookGrid({ books }) {
    const { dispatch } = useCart();

    const handleAddToCart = (book) => {
        dispatch({ type: 'ADD_TO_CART', payload: book });
    };

    if (books.length === 0) {
        return <p>No se encontraron libros</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {books.map((book) => (
                <BookCard key={book.id} book={book} onAddToCart={() => handleAddToCart(book)} />
            ))}
        </div>
    );
}
BookGrid.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
};

