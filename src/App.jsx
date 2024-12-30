import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import BookDetail from './pages/BookDetail'
import Checkout from './pages/Checkout'
import './App.css'
import { useState } from 'react'

function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const handleSearch = (term) => {
        setSearchTerm(term);
    };
    return (
        <Router>
                <Routes>
                    <Route element={<Layout onSearch={handleSearch} />}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/home" element={<HomePage searchTerm={searchTerm} />} />
                        <Route path="/book/:id" element={<BookDetail />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<HomePage searchTerm={searchTerm} />} />
                    </Route>
                </Routes>
        </Router>
    )
}

export default App