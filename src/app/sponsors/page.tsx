'use client';

import LiquidEther from '@/components/LiquidEther';

export default function SponsorsPage() {
  const sponsors = [
    { name: 'Premium Beverages Co' },
    { name: 'Craft Coffee Roasters' },
    { name: 'Local Brewery' },
    { name: 'Tea House' },
    { name: 'Juice Bar' },
    { name: 'Campus Cafe' },
    { name: 'Snack Shop' },
    { name: 'Bubble Tea Place' },
    { name: 'Smoothie Stand' },
  ];

  return (
    <div className="relative min-h-screen no-snap">
      {/* Hero */}
      <section className="py-12 sm:py-16 pt-[calc(6rem+4rem)] relative overflow-hidden bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-perandory text-4xl sm:text-6xl lg:text-8xl text-primary mb-4">
            Our Sponsors
          </h1>
          <p className="font-poppins text-xl sm:text-3xl lg:text-4xl text-primary px-2">
            Thank you to everyone who supports us!
          </p>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-10 sm:py-16 relative overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="pixel-window p-6 hover:-translate-y-1 transition-transform duration-200 border-l-4 border-accent"
              >
                <div className="w-12 h-12 mb-3 rounded-full border-2 border-accent flex items-center justify-center text-accent">
                  <span className="font-perandory text-xl">
                    {sponsor.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-perandory text-xl sm:text-2xl text-accent">
                  {sponsor.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="font-perandory text-3xl sm:text-5xl lg:text-7xl text-accent mb-4">
              Want to Sponsor Us?
            </h2>
            <p className="font-poppins text-base sm:text-xl text-accent-dark mb-6">
              Partner with BevSoc and reach our community!
            </p>
            <a href="mailto:sponsors@bevsoc.com" className="pixel-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
