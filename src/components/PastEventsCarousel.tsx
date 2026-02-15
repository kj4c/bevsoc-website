'use client';

import { useState, useEffect } from 'react';
import TiltedCard from './TiltedCard';

interface PastEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  link: string;
  image?: string;
  category: string;
}

export default function PastEventsCarousel({ events }: { events: PastEvent[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  if (events.length === 0) return null;

  const [itemsPerPage, setItemsPerPage] = useState(3);
  useEffect(() => {
    const update = () => setItemsPerPage(window.innerWidth < 640 ? 1 : (window.innerWidth < 1024 ? 2 : 3));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  const maxIndex = Math.max(0, events.length - itemsPerPage);
  const safeIndex = Math.min(currentIndex, maxIndex);
  const visibleEvents = events.slice(safeIndex, safeIndex + itemsPerPage);

  const goPrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const goNext = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  useEffect(() => {
    if (currentIndex > maxIndex && maxIndex >= 0) setCurrentIndex(maxIndex);
  }, [currentIndex, maxIndex]);

  // Fade-in animation whenever the visible slide changes
  useEffect(() => {
    setIsFading(true);
    const id = requestAnimationFrame(() => {
      // next paint -> transition to full opacity
      setIsFading(false);
    });
    return () => cancelAnimationFrame(id);
  }, [safeIndex]);

  return (
    <div className="w-full min-h-[280px] sm:min-h-[350px] lg:min-h-[400px] px-2 sm:px-8 lg:px-12 flex flex-col">
      <div className="relative flex items-center justify-center gap-6 sm:gap-8 flex-1 min-h-0">
        {/* Prev button */}
        {events.length > itemsPerPage && itemsPerPage > 0 && (
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="absolute left-0 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-primary border-2 border-accent text-accent hover:bg-accent hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all -translate-x-2 sm:-translate-x-4 shrink-0"
            aria-label="Previous events"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div
          className={
            `flex gap-6 sm:gap-8 justify-center items-center flex-1 min-w-0 h-full ` +
            `transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`
          }
        >
          {visibleEvents.map((event, i) => {
            const imageSrc = event.image && event.image.trim()
            return (
              <a
                key={event.id}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-0 w-[85vw] max-w-[280px] sm:w-auto sm:max-w-[220px] lg:max-w-[280px] aspect-[2/3] overflow-hidden rounded-2xl shadow-lg"
              >
                <TiltedCard
                  imageSrc={imageSrc}
                  altText={event.title}
                  captionText={event.title}
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  objectFit="cover"
                  scaleOnHover={1.05}
                  rotateAmplitude={8}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="w-full h-full flex flex-col justify-end">
                      <div className="p-3 sm:p-4 lg:p-5 bg-[var(--primary)]/95 text-accent">
                        <h3 className="font-perandory text-lg sm:text-2xl lg:text-3xl font-semibold">
                          {event.title}
                        </h3>
                        <p className="font-poppins text-sm sm:text-base lg:text-lg">
                          {new Date(event.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  }
                />
              </a>
            );
          })}
        </div>

        {/* Next button */}
        {events.length > itemsPerPage && itemsPerPage > 0 && (
          <button
            onClick={goNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-primary border-2 border-accent text-accent hover:bg-accent hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all translate-x-2 sm:translate-x-4 shrink-0"
            aria-label="Next events"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Dots indicator */}
      {events.length > itemsPerPage && itemsPerPage > 0 && (
        <div className="flex justify-center gap-2 mt-4 shrink-0">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentIndex ? 'bg-accent' : 'bg-accent/40'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
