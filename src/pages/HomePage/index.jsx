import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import BookGrid from '@/components/Books/BookGrid'
import { books } from '@/data/books'

export default function HomePage({ searchTerm }) {
    const [filteredBooks, setFilteredBooks] = useState(books)
    const [selectedCategory, setSelectedCategory] = useState('all')

    const categories = ['all', ...new Set(books.map(book => book.category))]

    useEffect(() => {
        const filtered = books.filter(book => {
            const searchTermLower = searchTerm ? searchTerm.toLowerCase() : ""
            const matchesSearch = book.title.toLowerCase().includes(searchTermLower) ||
                book.author.toLowerCase().includes(searchTermLower)
            const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory

            return matchesSearch && matchesCategory
        })
        setFilteredBooks(filtered)
    }, [searchTerm, selectedCategory])

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Bienvenido a Relatos de Papel
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Descubre historias increíbles en nuestra biblioteca digital
                </p>
            </section>

            <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
                <div className="flex items-center space-x-4">
                    <label htmlFor="category" className="text-sm font-medium text-gray-700">
                        Filtrar por:
                    </label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category === 'all' ? 'Todas las categorías' : category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                {filteredBooks.length > 0 ? (
                    <>
                        <div className="mb-4 text-sm text-gray-600">
                            Mostrando {filteredBooks.length} resultados
                            {searchTerm && ` para "${searchTerm}"`}
                        </div>
                        <BookGrid books={filteredBooks} />
                    </>
                ) : (
                    <div className="text-center py-12">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                            No se encontraron resultados
                        </h2>
                        <p className="text-gray-600">
                            Intenta con otros términos de búsqueda o cambia los filtros
                        </p>
                    </div>
                )}
            </div>

            <section className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Categorías Destacadas
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories
                        .filter(category => category !== 'all')
                        .map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`p-4 rounded-lg text-center transition-colors ${
                                    selectedCategory === category
                                        ? 'bg-primary-100 text-primary-700'
                                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                </div>
            </section>
        </div>
    )
}

HomePage.propTypes = {
    searchTerm: PropTypes.string.isRequired,
}