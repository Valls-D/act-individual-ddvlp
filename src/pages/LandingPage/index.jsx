// src/pages/LandingPage/index.jsx
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

export default function LandingPage() {
    const navigate = useNavigate()
    const [countdown, setCountdown] = useState(5)

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home')
        }, 5000)

        const countdownInterval = setInterval(() => {
            setCountdown((prev) => prev - 1)
        }, 1000)

        return () => {
            clearTimeout(timer)
            clearInterval(countdownInterval)
        }
    }, [navigate])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
            <div className="text-center space-y-8 p-8 max-w-2xl mx-auto">
                {/* Logo y Título */}
                <div className="animate-fade-in">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-primary-600 rounded-full">
                            <BookOpen size={48} className="text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Relatos de Papel
                    </h1>
                    <p className="text-xl text-gray-600">
                        Tu librería online de confianza
                    </p>
                </div>

                {/* Mensaje de bienvenida */}
                <div className="space-y-4 animate-fade-in-up">
                    <p className="text-lg text-gray-700">
                        Bienvenido a tu destino literario, donde cada página cuenta una historia única.
                    </p>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="text-sm text-gray-500">
                            Serás redirigido en {countdown} segundos...
                        </div>
                        {/* Barra de progreso */}
                        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary-600 transition-all duration-1000 ease-linear"
                                style={{ width: `${((5 - countdown) / 5) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Botón de entrada inmediata */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                    <button
                        onClick={() => navigate('/home')}
                        className="mt-6 px-8 py-3 bg-primary-600 text-white rounded-lg font-medium
                                 hover:bg-primary-700 transition-colors duration-200
                                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                        Entrar ahora
                    </button>
                </div>

                {/* Características destacadas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center animate-fade-in-up"
                     style={{ animationDelay: "0.7s" }}>
                    <div>
                        <h3 className="font-semibold text-gray-900">Amplio Catálogo</h3>
                        <p className="text-sm text-gray-600">Miles de títulos a tu disposición</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">Envío Rápido</h3>
                        <p className="text-sm text-gray-600">Recibe tus libros en 24/48h</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">Atención 24/7</h3>
                        <p className="text-sm text-gray-600">Estamos aquí para ayudarte</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

