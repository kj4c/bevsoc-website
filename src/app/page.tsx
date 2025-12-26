'use client';
import Link from 'next/link';
import Sparkles from '@/components/Sparkles';
import Bubbles from '@/components/Bubbles';
import RotatingText from '@/components/RotatingText';
import { motion, LayoutGroup, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import LiquidEther from '@/components/LiquidEther';

const backgroundImages = [
  '/water.jpg',
  '/wine.jpg',
  '/matcha.jpg',
  '/iced_coffee.jpg',
  '/beer.jpg'
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="relative min-h-screen">
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      >
        <LiquidEther
          colors={[ '#faf0e8', '#e8ddd4', '#e8ddd4' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        /> 
      </div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
          <div className="logo-container" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            <div className="top-row relative inline-block text-accent-light">
              <span className="script-b" style={{ fontFamily: 'var(--font-amoresa), cursive' }}>B</span>
              <span className="serif-rest" style={{ fontFamily: 'var(--font-perandory), serif' }}>EVERAGE</span>
              <span className="unsw-tag" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>unsw</span>
            </div>
            <div className="bottom-row text-accent-light" style={{ fontFamily: 'var(--font-poppins), sans-serif bold' }}>
              SOCIETY
            </div>
          </div>
          
          <LayoutGroup>
            <motion.p className="flex items-center justify-center gap-5 text-white text-shadow-lg" layout>
              <motion.span
                className="font-perandory text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                layout
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              >
                Sharing{'  '}
              </motion.span>
              <RotatingText
                texts={['Warmth', 'matcha', 'tea', 'coffee', 'comfort', 'smiles', 'stories', 'sips', 'pints', 'culture', 'breaks']}
                mainClassName="text-white text-shadow-lg  overflow-hidden font-perandory text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                staggerFrom={'last'}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </motion.p>
          </LayoutGroup>
          
          {/* Scroll Indicator */}
          {/* <motion.div
            className="mt-12 flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="w-px h-24 bg-accent opacity-60"></div>
          </motion.div> */}
          
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/events" 
              className="px-8 py-4 bg-accent text-white rounded-full font-pixel text-lg font-semibold transition-all duration-200 hover:scale-105 hover:bg-accent-dark shadow-lg"
              style={{ textShadow: '2px 2px 0px #4a1f2a' }}
            >
              🍹 View Events
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-transparent border-3 border-accent text-accent rounded-full font-pixel text-lg font-semibold transition-all duration-200 hover:scale-105 hover:bg-accent hover:text-white shadow-lg"
              style={{ 
                borderWidth: '3px',
                textShadow: '1px 1px 0px rgba(255,255,255,0.5)'
              }}
            >
              💕 About Us
            </Link>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bubbly-title text-xl sm:text-2xl text-accent mb-4">
              What We Offer
            </h2>
            <p className="font-pixel text-xl text-foreground">
              More than just drinks — we're building a community! 🌟
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '👥',
                title: 'Community',
                description: 'Meet fellow beverage enthusiasts who love good drinks and great company!',
              },
              {
                icon: '🎉',
                title: 'Events',
                description: 'Exclusive tastings, workshops, and social gatherings throughout the year~',
              },
              {
                icon: '📚',
                title: 'Education',
                description: 'Learn about brewing, flavor profiles, and the stories behind your fave drinks!',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="pixel-window p-6 hover:translate-y-[-4px] transition-transform duration-200"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-bubbly-title text-sm text-accent mb-3">
                  {feature.title}
                </h3>
                <p className="font-pixel text-lg text-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
        {/* <section className="py-20 relative overflow-hidden">
        <Sparkles />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Members' },
              { value: '50+', label: 'Events' },
              { value: '20+', label: 'Sponsors' },
              { value: '3', label: 'Years' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-bubbly-title text-2xl sm:text-3xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-pixel text-lg text-pink-light uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <Bubbles />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="pixel-window p-8">
            <h2 className="font-bubbly-title text-lg sm:text-xl text-accent mb-6">
              Ready to Join? ✨
            </h2>
            <p className="font-pixel text-xl text-foreground mb-8">
              Become part of our growing community! Join our Discord to stay updated~
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://discord.gg/bevsoc"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn bg-[#5865F2]"
                style={{ 
                  boxShadow: '4px 4px 0 #4752C4, inset -2px -2px 0 #4752C4, inset 2px 2px 0 #7289DA'
                }}
              >
                💬 Join Discord
              </a>
              <Link href="/events" className="pixel-btn">
                📅 See Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
