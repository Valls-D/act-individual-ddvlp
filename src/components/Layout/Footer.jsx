// src/components/Layout/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Relatos de Papel</h3>
                        <p className="text-gray-600">
                            Tu librería online de confianza para encontrar las mejores historias.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contacto</h3>
                        <p className="text-gray-600">
                            <a href="mailto:dorimarlp@gmail.com" className="text-primary-600 hover:text-primary-900">
                                dorimarlp@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                <div className="border-t mt-8 pt-8 text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Relatos de Papel. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;