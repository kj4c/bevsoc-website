'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const backgroundImages = [
  '/water.jpg',
  '/wine.jpg',
  '/matcha.jpg',
  '/iced_coffee.jpg',
  '/beer.jpg'
];

export default function BackgroundCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 4000); // 4 seconds per image

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
        <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
            <img 
            src={backgroundImages[currentImageIndex]} 
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </motion.div>
        </AnimatePresence>
        </div>
    );
}