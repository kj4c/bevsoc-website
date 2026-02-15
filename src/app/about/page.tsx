'use client';
import LiquidEther from '@/components/LiquidEther';
import CircularGallery from '@/components/CircularGallery';
import Link from 'next/link';

export default function AboutPage() {
  const teamItems = [
    { image: '/execs_pics/riwaz.png', text: 'Riwaz Bhattachan - President' },
    { image: '/execs_pics/nana.png', text: 'Nana Thoranine - VP Productions' },
    { image: '/execs_pics/alicia.png', text: 'Alicia Ong - VP Creatives' },
    { image: '/execs_pics/kayla.png', text: 'Kayla Lee - VP Events' },
    { image: '/execs_pics/zac.png', text: 'Zachary Abran - VP IT' },
    { image: '/execs_pics/anisa.jpg', text: 'Anisa Brar - VP Human Resources' },
    { image: '/execs_pics/selina.png', text: 'Selina Yan - VP Sponsorships' },
    { image: '/execs_pics/ethan.png', text: 'Ethan Gu - Treasurer' },
    { image: '/execs_pics/jenny.JPG', text: 'Jenny Tang - Secretary' },
    { image: '/execs_pics/alex.png', text: 'Alex Lum - Arc Delegate' },
    { image: '/execs_pics/sean.png', text: 'Sean Wang - GEDI' },
    { image: '/execs_pics/olivia.png', text: 'Olivia Oh - GEDI' },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Mission Section */}
      <section className="py-12 sm:py-16 pt-[calc(6rem+4rem)] pb-24 relative overflow-visible flex flex-col items-center justify-center">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 min-h-0 flex flex-col items-center justify-center py-6 sm:py-8">
          <div className="pixel-window p-6 sm:p-8 w-full">
            <h2 className="font-perandory text-4xl sm:text-6xl lg:text-8xl text-accent mb-4 sm:mb-6">
              Our Mission
            </h2>
            <div className="space-y-3 sm:space-y-4 font-poppins text-base sm:text-xl lg:text-2xl text-foreground leading-relaxed">
              <p>
                Founded in 2025, BevSoc emerged from a simple idea: bring together people 
                who appreciate the art and science of beverages!
              </p>
              <p>
                Whether it&apos;s the perfect espresso shot, a vintage wine, or an innovative 
                cocktail — every drink has a story worth exploring.
              </p>
              <p>
                Our mission is to create an inclusive community where members can learn, 
                taste, and connect. From beginners to enthusiasts, everyone is welcome!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-24 relative bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="font-perandory text-4xl sm:text-6xl lg:text-8xl text-primary mb-4">
              Our Values
            </h2>
            <p className="font-poppins text-xl sm:text-3xl lg:text-4xl text-primary px-2">
              What we stand for as a community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'Inclusivity', desc: 'All beverage lovers are welcomed!' },
              { title: 'Community', desc: 'Building friendships over shared sips and good vibes.' },
              { title: 'Responsibility', desc: 'Mindful consumption and safe, inclusive enjoyment for all.' },
            ].map((value) => (
              <div
                key={value.title}
                className="pixel-window p-8 sm:p-10 min-h-[140px] sm:min-h-[160px] hover:-translate-y-1 transition-transform duration-200"
              >
                <h3 className="font-perandory text-2xl sm:text-3xl lg:text-4xl text-accent mb-4 underline underline-1">
                  {value.title}
                </h3>
                <p className="font-poppins text-base sm:text-xl lg:text-2xl text-accent-light leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-6 sm:py-8 relative overflow-hidden flex flex-col items-center justify-center">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center relative z-10">
          <div className="text-center mb-2">
            <h2 className="font-perandory text-4xl sm:text-6xl lg:text-8xl text-accent mb-2">
              Meet the Execs
            </h2>
            <p className="font-poppins text-xl sm:text-3xl lg:text-4xl text-accent px-2">
              The people behind BevSoc
            </p>
          </div>
          <div className="h-[280px] sm:h-[350px] lg:h-[450px]" style={{ position: 'relative' }}>
            <CircularGallery
              items={teamItems}
              bend={1}
              textColor="#6b2d3c"
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.2}
            />
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden flex flex-col items-center justify-center">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full flex-1 flex flex-col justify-center">
          <div className="pixel-window p-6 sm:p-8">
            <h2 className="font-perandory text-4xl sm:text-6xl lg:text-8xl text-accent mb-4 sm:mb-6">
              Want to Join?
            </h2>
            <p className="font-poppins text-base sm:text-xl text-foreground mb-6 sm:mb-8">
              We&apos;d love to have you! Reach out to us or follow us on Facebook or Instagram to stay updated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                  href="https://campus.hellorubric.com/?s=13447&fbclid=IwY2xjawP0u95leHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeknXItBQQxLz1gZgQVe0vgb1JBR0fBdAE6FpN_9LP_b_F40BNHL_Zyf-Lc-U_aem_blBqFxhOgp5rxayx7h8c6A"
                  className="pixel-btn flex items-center gap-2"
                  >
                  <img
                    src="/rubric.png"
                    alt="Rubric"
                    className="w-5 h-5 object-contain"
                  />
                  Join on Rubric
                  </a>
              {/* Discord button commented out until server is ready
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
              */}
              <Link href="/events" className="pixel-btn flex items-center gap-2">See Events</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
