'use client';
import Link from 'next/link';
import Sparkles from '@/components/Sparkles';
import Bubbles from '@/components/Bubbles';
import RotatingText from '@/components/RotatingText';
import { motion, LayoutGroup, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import LiquidEther from '@/components/LiquidEther';
import BackgroundCarousel from '@/components/BackgroundCarousel';
import { CalendarFold, UsersRound, Wine } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[calc(6rem+4rem)] pb-24">
        {/* Background Image Carousel - Only in Hero Section */}
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat">
          <BackgroundCarousel />
            {/* <LiquidEther
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
        />  */}
        </div>
        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
          <div className="logo-container" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            <div className="top-row relative inline-block text-white">
              <span className="script-b" style={{ fontFamily: 'var(--font-amoresa), cursive' }}>B</span>
              <span className="serif-rest" style={{ fontFamily: 'var(--font-perandory), serif' }}>EVERAGE</span>
              <span className="unsw-tag" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>unsw</span>
            </div>
            <div className="bottom-row text-white" style={{ fontFamily: 'var(--font-poppins), sans-serif bold' }}>
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 min-h-0 overflow-y-auto">
          <div className="text-center mb-16">
            <h2 className="font-perandory text-8xl sm:text-8xl text-primary mb-4">
              What We Offer
            </h2>
            <p className="font-poppins text-4xl text-primary">
              More than just drinks — we're building a community!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            {[
              {
                icon: <UsersRound />,
                title: 'Community',
                description: 'Meet fellow beverage enthusiasts who love good drinks and great company!',
                image: '/matcha.jpg',
              },
              {
                icon: <Wine/>,
                title: 'Events',
                description: 'Exclusive tastings, workshops, and social gatherings throughout the year!',
                image: '/wine.jpg',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="pixel-window p-6 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="w-5 h-5 mb-4">{feature.icon}</div>
                <h3 className="font-perandory text-4xl text-accent mb-3 underline underline-1" >
                  {feature.title}
                </h3>
                <p className="font-poppins text-2xl text-accent-light mb-4">
                  {feature.description}
                </p>
                <div className="w-full h-60 rounded-lg overflow-hidden bg-cream mt-auto">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
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
      <section className="py-24 relative overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-10">
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
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full flex-1 flex flex-col justify-center">
          <div className="pixel-window p-8">
            <h2 className="font-perandory text-8xl sm:text-8xl text-accent mb-6">
              Ready to Join?
            </h2>
            <p className="font-poppins text-xl text-foreground mb-8">
              Become part of our growing community! Join our Discord to stay updated
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://discord.gg/bevsoc"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord
              </a>
              <Link href="/events" className="pixel-btn flex items-center gap-2"><CalendarFold className="w-5 h-5"/> See Events</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
