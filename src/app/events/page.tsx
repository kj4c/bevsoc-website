'use client';

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
  link: string;
  image?: string;
  category: string;
}

export default function EventsPage() {
  const events: Event[] = eventsData;

  const parseLocalDate = (yyyyMmDd: string) => {
    const [y, m, d] = yyyyMmDd.split('-').map(Number);
    return new Date(y, (m ?? 1) - 1, d ?? 1);
  };

  // Sort events by date
  const sortedEvents = [...events].sort(
    (a, b) => parseLocalDate(a.date).getTime() - parseLocalDate(b.date).getTime()
  );

  // Separate upcoming and past events
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const upcomingEvents = sortedEvents.filter(
    (e) => parseLocalDate(e.date) >= todayStart
  );
  const pastEvents = [...sortedEvents]
    .filter((e) => parseLocalDate(e.date) < todayStart)
    .sort((a, b) => parseLocalDate(b.date).getTime() - parseLocalDate(a.date).getTime()); // most recent first

  return (
    <div className="relative min-h-screen no-snap">
      {/* Upcoming Events Section */}
      <section className="pt-[calc(6rem+5rem)] sm:pt-[calc(6rem+4rem)] pb-6 sm:pb-10 relative flex flex-col items-center justify-center overflow-visible">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center gap-4 sm:gap-2 pt-4 sm:pt-6 relative z-10">
          <h1 className="font-perandory text-4xl sm:text-6xl lg:text-8xl text-accent text-center leading-tight shrink-0">
            Upcoming Events
          </h1>

          {upcomingEvents.length > 0 ? (
            <div className="flex justify-center w-full flex-1 min-h-0 items-center">
              <PastEventsCarousel events={upcomingEvents} />
            </div>
          ) : (
            <div className="p-8 text-center max-w-md mx-auto">
              <p className="font-poppins text-base sm:text-xl text-accent">
                No upcoming events right now. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="pt-6 pb-4 sm:py-6 relative bg-accent flex flex-col items-center justify-center overflow-visible py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center gap-4 sm:gap-2">
            <h2 className="font-perandory text-4xl sm:text-6xl lg:text-8xl text-primary text-center leading-tight shrink-0">
              Past Events
            </h2>

            <div className="flex justify-center w-full flex-1 min-h-0 items-center">
              <PastEventsCarousel events={pastEvents} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="snap-none py-12 sm:py-16 lg:py-20 relative bg-[var(--accent)] border-[var(--accent-dark)] flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h2 className="text-[var(--primary)] font-perandory text-4xl sm:text-6xl lg:text-8xl mb-4">
            Never Miss an Event
          </h2>
          <p className="text-[var(--pink-light)] font-poppins text-base sm:text-lg mb-4">
            Follow us on Facebook or Instagram to get notified about new events.
          </p>
          {/* Discord link commented out until server is ready
          <a
            href="https://discord.gg/bevsoc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--pink-light)] hover:text-white transition-colors font-poppins text-base sm:text-lg"
          >
            → Join Discord
          </a>
          */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="https://www.facebook.com/profile.php?id=61581669824171"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--pink-light)] hover:text-white transition-colors font-poppins text-base sm:text-lg"
            >
              <span>Visit</span>
              {/* Simple Facebook \"f\" logo */}
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--pink-light)] text-[var(--accent)] font-bold text-sm">
                f
              </span>
            </a>
            <a
              href="https://instagram.com/unswbevsoc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--pink-light)] hover:text-white transition-colors font-poppins text-base sm:text-lg"
            >
              <span>Visit</span>
              {/* Simple Instagram glyph */}
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-md border border-[var(--pink-light)]">
                <span className="w-3 h-3 rounded-full border border-[var(--pink-light)]" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

