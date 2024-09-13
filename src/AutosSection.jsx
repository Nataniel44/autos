"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

// Ejemplo de datos de productos de autos con más detalles
const carProducts = [
  {
    id: 1,
    name: "Sedan Deportivo",
    price: "$35,000",
    image: "/sedan.jpg?height=200&width=300",
    description:
      "Un sedán elegante y potente, perfecto para los amantes de la velocidad y el confort.",
  },
  {
    id: 2,
    name: "SUV Familiar",
    price: "$40,000",
    image: "/fond.webp?height=200&width=300",
    description:
      "Espacioso y versátil, ideal para familias que buscan comodidad y seguridad.",
  },
  {
    id: 3,
    name: "Coupé de Lujo",
    price: "$55,000",
    image: "/cupe.jfif?height=200&width=300",
    description:
      "Un coupé sofisticado que combina rendimiento y lujo en un paquete impresionante.",
  },
];

// Reemplaza esto con tu número de WhatsApp real
const whatsappNumber = "3755538503";

export default function CarProductGrid() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const sendWhatsAppMessage = (product) => {
    const message = `Hola, estoy interesado en el ${product.name}. ¿Podrías darme más información?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="container mx-auto px-4 pt-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-start pb-4 text-gray-800">
        Autos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {carProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: product.id * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 text-lg font-medium mb-4">
                {product.price}
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => openModal(product)}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold 
                             hover:bg-blue-700 transition-colors duration-300 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                             transform hover:scale-105 active:scale-95"
                >
                  Ver Detalles
                </button>
                <button
                  onClick={() => sendWhatsAppMessage(product)}
                  className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-lg font-semibold 
                             hover:bg-green-600 transition-colors duration-300 
                             focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50
                             transform hover:scale-105 active:scale-95"
                  aria-label="Consultar por WhatsApp"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Consultar
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl p-6 max-w-lg w-full relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-3xl font-bold mb-2 text-gray-800">
                {selectedProduct.name}
              </h2>
              <p className="text-2xl font-semibold mb-4 text-blue-600">
                {selectedProduct.price}
              </p>
              <p className="text-gray-600 mb-4">
                {selectedProduct.description}
              </p>
              <button
                onClick={() => sendWhatsAppMessage(selectedProduct)}
                className="w-full flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold 
                           hover:bg-green-600 transition-colors duration-300 
                           focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50
                           transform hover:scale-105 active:scale-95"
              >
                <MessageCircle size={24} className="mr-2" />
                Consultar por WhatsApp
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
