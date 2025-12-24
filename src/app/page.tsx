import Link from 'next/link';
import Sparkles from '@/components/Sparkles';
import Bubbles from '@/components/Bubbles';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--pink-light)] to-[var(--primary)]">
        <Sparkles />
        <Bubbles />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pixel Window */}
          <div className="pixel-window p-8 md:p-12">
            <div className="pixel-window-header -mx-8 md:-mx-12 -mt-8 md:-mt-12 mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-pixel-title text-[var(--primary)] text-xs">BEV SOC</span>
              </div>
              <div className="flex gap-2">
                <div className="w-4 h-4 border-2 border-[var(--accent-dark)] bg-[var(--primary)]"></div>
                <div className="w-4 h-4 border-2 border-[var(--accent-dark)] bg-[var(--primary)]"></div>
                <div className="w-4 h-4 border-2 border-[var(--accent-dark)] bg-[var(--primary)]"></div>
              </div>
            </div>
            
            <h1 className="font-pixel-title text-2xl sm:text-3xl lg:text-4xl text-[var(--accent)] mb-6 leading-relaxed">
              Welcome to<br />
              <span className="text-[var(--accent-dark)]">BevSoc!</span>
            </h1>
            
            <p className="font-pixel text-xl sm:text-2xl text-[var(--foreground)] mb-8">
              ✨ The cutest beverage appreciation society ✨<br/>
              Join us for tastings, events, and good vibes~
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/events" className="pixel-btn">
                🍹 View Events
              </Link>
              <Link
                href="/about"
                className="pixel-btn bg-[var(--cream)] text-[var(--accent)]"
                style={{ 
                  boxShadow: '4px 4px 0 var(--accent), inset -2px -2px 0 var(--pink), inset 2px 2px 0 white'
                }}
              >
                💕 About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-pixel-title text-xl sm:text-2xl text-[var(--accent)] mb-4">
              What We Offer
            </h2>
            <p className="font-pixel text-xl text-[var(--foreground)]">
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
                <h3 className="font-pixel-title text-sm text-[var(--accent)] mb-3">
                  {feature.title}
                </h3>
                <p className="font-pixel text-lg text-[var(--foreground)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[var(--accent)] relative overflow-hidden">
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
                <div className="font-pixel-title text-2xl sm:text-3xl text-[var(--primary)] mb-2">
                  {stat.value}
                </div>
                <div className="font-pixel text-lg text-[var(--pink-light)] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--primary)] relative overflow-hidden">
        <Bubbles />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="pixel-window p-8">
            <h2 className="font-pixel-title text-lg sm:text-xl text-[var(--accent)] mb-6">
              Ready to Join? ✨
            </h2>
            <p className="font-pixel text-xl text-[var(--foreground)] mb-8">
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
