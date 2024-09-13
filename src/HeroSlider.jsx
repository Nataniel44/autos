"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/2.webp?height=400&width=800", "/1.jfif?height=400&width=800"];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 5) {
      handleNext();
    }

    if (diff < -5) {
      handlePrev();
    }

    setTouchPosition(null);
  };

  return (
    <section id="hero" className="relative h-[500px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Fondo borroso */}
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
          {/* Imagen principal */}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-2 items-start justify-center text-start text-white p-4 pl-5 md:pl-20">
        <motion.h1
          className="text-6xl text-center  md:text-8xl font-bold   "
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          AUTOMS
        </motion.h1>{" "}
        <motion.p
          className="text-2xl md:text-4xl text-black bg-white bg-opacity-50 px-2 py-0.5"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          COMPRA <span className="font-bold">SEGURA</span>
        </motion.p>
        <motion.p
          className="text-2xl md:text-4xl text-black bg-white bg-opacity-50 px-2 py-0.5"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          ASISTENCIA <span className="font-bold">24/7</span>
        </motion.p>
        <motion.p
          className="text-2xl md:text-4xl text-black bg-white bg-opacity-50 px-2 py-0.5"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="font-bold"> FÁCIL</span> Y
          <span className="font-bold">RÁPIDO</span>
        </motion.p>
        <motion.p
          className="text-2xl md:text-4xl text-black bg-white bg-opacity-50 px-2 py-0.5"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="font-bold text-red-600">CONSULTÁ</span>
          {" / "}
          <span className="font-bold text-blue-600">COMPRÁ</span>
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.6,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          Explorar Ahora
        </motion.button>
      </div>

      <div
        className="absolute inset-0"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      />

      <button
        className="absolute invisible md:visible left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all duration-300"
        onClick={handlePrev}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute invisible md:visible right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all duration-300"
        onClick={handleNext}
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
