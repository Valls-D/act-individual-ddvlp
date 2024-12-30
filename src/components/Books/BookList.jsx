/*
// src/components/books/BookList.jsx
import { books } from '@/data/books'

const BooksList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book) => (
                <div key={book.id} className="border p-4 rounded-lg">
                    <img src={book.cover} alt={book.title} className="w-full h-64 object-cover mb-4" />
                    <h3 className="font-semibold text-lg">{book.title}</h3>
                    <p className="text-gray-600">{book.author}</p>
                    <p className="text-gray-800 font-bold">${book.price}</p>
                </div>
            ))}
        </div>
    )
}

export default BooksList*/
