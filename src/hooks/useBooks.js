// src/hooks/useBooks.js
import { useState, useEffect } from 'react';
import { books } from '../data/books';

export function useBooks() {
    const [booksList, setBooksList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setBooksList(books); // Carga los libros desde el archivo `books.js`
            setLoading(false);
        }, 1000);
    }, []);

    return { books: booksList, loading }; // Devuelves los libros y el estado de carga
}
