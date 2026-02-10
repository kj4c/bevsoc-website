'use client';

import LiquidEther from '@/components/LiquidEther';

export default function SponsorsPage() {
  const sponsors = [
    {
      name: 'Genki',
      logo: '/sponsorlogos/genki.png',
      url: 'https://www.yuanqisenlin.com/',
    },
    {
      name: 'Wootea',
      logo: '/sponsorlogos/wootea.png',
      url: 'https://wootea.com.au/',
    },
    {
      name: 'Ohmoyo',
      logo: '/sponsorlogos/ohmoyo_transparent.png',
      url: 'https://www.ohmyyo.com.au/',
    },
    {
      name: 'Nihao',
      logo: '/sponsorlogos/nihao.webp',
      url: 'https://nihaobar.com.au/',
    },
  ];

  return (
    <div className="relative min-h-screen no-snap">
      {/* Hero */}
      <section className="py-12 sm:py-16 pt-[calc(6rem+5rem)] sm:pt-[calc(6rem+4rem)] relative overflow-visible bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 sm:pt-0">
          <h1 className="font-perandory text-4xl sm:text-6xl lg:text-8xl text-primary mb-4 leading-tight">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:-translate-y-1 transition-transform duration-200"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-auto max-h-32 sm:max-h-40 object-contain"
                />
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="font-perandory text-3xl sm:text-5xl lg:text-7xl text-accent mb-4">
              Want to Sponsor Us?
            </h2>
            <p className="font-poppins text-base sm:text-xl text-accent-dark mb-6">
              Partner with BevSoc and reach our community!
            </p>
            <a
              href="mailto:sponsorshipbevsoc@gmail.com"
              className="pixel-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
