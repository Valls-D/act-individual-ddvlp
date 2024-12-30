import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ShippingForm({ onSubmit, loading = false, disabled = false }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        additionalInfo: ''
    });

    const [touched, setTouched] = useState({});

    // Validación de email
    const isEmailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // Validación de teléfono
    const isPhoneValid = (phone) => {
        return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone);
    };

    // Validar formulario
    const isFormValid = () => {
        return (
            formData.email &&  // El email debe ser obligatorio y válido
            isEmailValid(formData.email) &&
            (formData.phone === '' || isPhoneValid(formData.phone))  // El teléfono es opcional, pero si está presente debe ser válido
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            onSubmit(formData);  // Enviar los datos al checkout
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({
            ...prev,
            [name]: true
        }));
    };

    return (
        <form id="shipping-form" onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre completo */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left" >
                    Nombre completo
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={loading || disabled}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="Ej: Ada Lovelace"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={loading || disabled}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="correo@ejemplo.com"
                />
                {touched.email && !isEmailValid(formData.email) && (
                    <p className="mt-1 text-sm text-red-600">Por favor, introduce un email válido</p>
                )}
            </div>

            {/* Teléfono */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-left">
                    Teléfono
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={loading || disabled}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="Ej: +34 612 345 678"
                />
                {touched.phone && formData.phone && !isPhoneValid(formData.phone) && (
                    <p className="mt-1 text-sm text-red-600">Por favor, introduce un teléfono válido</p>
                )}
            </div>

            {/* Dirección */}
            <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 text-left">
                    Dirección
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={loading || disabled}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="Calle, número, piso..."
                />
            </div>

            {/* Ciudad y Código Postal */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 text-left">
                        Ciudad
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={loading || disabled}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        placeholder="Ej: Barcelona"
                    />
                </div>

                <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 text-left">
                        Código Postal
                    </label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={loading || disabled}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        placeholder="Ej: 08029"
                    />
                </div>
            </div>

            {/* Provincia */}
            <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 text-left">
                    Provincia
                </label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={loading || disabled}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="Ej: Barcelona"
                />
            </div>

            {/* Información adicional */}
            <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 text-left">
                    Información adicional
                </label>
                <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows="3"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    disabled={loading || disabled}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="Instrucciones de entrega, punto de referencia..."
                />
            </div>

            {/* Mensaje de campo requerido */}
            <p className="text-sm text-gray-500">* Campo requerido</p>
        </form>
    );
}

ShippingForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    disabled: PropTypes.bool
};


