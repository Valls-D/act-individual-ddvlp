// src/components/Layout/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import PropTypes from 'prop-types';

export default function Layout({ onSearch }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header onSearch={onSearch} />
            <main className="flex-grow container mx-auto px-4 py-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
Layout.propTypes = {
    onSearch: PropTypes.func.isRequired,
};