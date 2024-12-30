// src/components/Cart/CartDrawer.jsx
import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Dialog, Transition } from '@headlessui/react'
import { X, ShoppingBag } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

export default function CartDrawer({ isOpen, onClose }) {
    const { state, clearCart } = useCart()

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                                    Carrito de compras
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={onClose}
                                                    >
                                                        <span className="absolute -inset-0.5" />
                                                        <span className="sr-only">Cerrar panel</span>
                                                        <X className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            {state.items.length > 0 ? (
                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul className="-my-6 divide-y divide-gray-200">
                                                            {state.items.map((item) => (
                                                                <CartItem key={item.id} item={item} />
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center h-full py-12">
                                                    <ShoppingBag className="h-12 w-12 text-gray-400" />
                                                    <p className="mt-4 text-gray-500">
                                                        Tu carrito está vacío
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {state.items.length > 0 && (
                                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Total</p>
                                                    <p>€{state.total.toFixed(2)}</p>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">
                                                    Envío calculado al finalizar la compra.
                                                </p>
                                                <div className="mt-6">
                                                    <Link
                                                        to="/checkout"
                                                        onClick={onClose}
                                                        className="flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700"
                                                    >
                                                        Finalizar compra
                                                    </Link>
                                                </div>
                                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                    <button
                                                        type="button"
                                                        className="font-medium text-primary-600 hover:text-primary-500"
                                                        onClick={() => {
                                                            clearCart()
                                                            onClose()
                                                        }}
                                                    >
                                                        Vaciar carrito
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
CartDrawer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}