import Sparkles from '@/components/Sparkles';
import EventCard from '@/components/EventCard';
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
  const pastEvents = sortedEvents.filter((e) => new Date(e.date) < now);

  return (
    <div className="min-h-screen bg-[var(--primary)]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[var(--pink-light)] to-[var(--primary)]">
        <Sparkles />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="pixel-window p-8">
            <h1 className="font-bubbly-title text-2xl sm:text-3xl text-[var(--accent)] mb-4">
              Events
            </h1>
            <p className="font-pixel text-xl text-[var(--foreground)]">
              🎉 Check out what's happening! 🎉
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bubbly-title text-lg text-[var(--accent)] text-center mb-8">
            ✨ Upcoming Events ✨
          </h2>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  category={event.category}
                />
              ))}
            </div>
          ) : (
            <div className="pixel-window p-8 text-center max-w-md mx-auto">
              <p className="font-pixel text-xl text-[var(--foreground)]">
                No upcoming events right now~ Check back soon! 💕
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-[var(--cream)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bubbly-title text-lg text-[var(--accent)] text-center mb-8">
              📸 Past Events
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="pixel-window p-4 opacity-75">
                  <h3 className="font-pixel text-lg text-[var(--accent)] mb-2">
                    {event.title}
                  </h3>
                  <p className="font-pixel text-sm text-[var(--foreground)]">
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subscribe CTA */}
      <section className="py-20 bg-[var(--accent)] relative overflow-hidden">
        <Sparkles />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-bubbly-title text-lg text-[var(--primary)] mb-6">
            Never Miss an Event! 📅
          </h2>
          <p className="font-pixel text-xl text-[var(--pink-light)] mb-8">
            Join our Discord to get notified about new events~
          </p>
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
        </div>
      </section>
    </div>
  );
}

