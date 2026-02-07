'use client';

import EventCard from '@/components/EventCard';
import PastEventsCarousel from '@/components/PastEventsCarousel';
import LiquidEther from '@/components/LiquidEther';
import eventsData from '@/data/events.json';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  category: string;
}

export default function EventsPage() {
  const events: Event[] = eventsData;

  // Sort events by date
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Separate upcoming and past events
  const now = new Date();
  const upcomingEvents = sortedEvents.filter((e) => new Date(e.date) >= now);
  const pastEvents = [...sortedEvents]
    .filter((e) => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // most recent first

  return (
    <div className="relative min-h-screen">
      {/* Events */}
      <section className="py-8 pt-[calc(6rem+4rem)] relative flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <LiquidEther
            colors={['#faf0e8', '#e8ddd4', '#e8ddd4']}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <h1 className="font-perandory text-8xl sm:text-8xl text-accent mb-6 text-center">
            Upcoming Events
          </h1>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, i) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  category={event.category}
                  variant={i % 2 === 0 ? 'beige' : 'maroon'}
                />
              ))}
            </div>
          ) : (
            <div className="pixel-window p-8 text-center max-w-md mx-auto">
              <p className="font-poppins text-xl text-accent">
                No upcoming events right now. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-6 relative bg-accent flex flex-col items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 min-h-0 flex flex-col">
            <h2 className="font-perandory text-8xl sm:text-8xl text-primary mb-4 text-center shrink-0">
              Past Events
            </h2>

            <div className="flex-1 min-h-0 flex items-stretch justify-center w-full">
              <PastEventsCarousel events={pastEvents} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="snap-none py-20 relative bg-[var(--accent)] border-[var(--accent-dark)] flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h2 className="text-[var(--primary)] font-perandory text-8xl sm:text-8xl mb-4">
            Never Miss an Event
          </h2>
          <p className="text-[var(--pink-light)] font-poppins text-lg mb-4">
            Join our Discord to get notified about new events.
          </p>
          <a
            href="https://discord.gg/bevsoc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--pink-light)] hover:text-white transition-colors font-poppins text-lg"
          >
            → Join Discord
          </a>
        </div>
      </section>
    </div>
  );
}

