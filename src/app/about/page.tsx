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
      <section className="snap-start-flow py-12 sm:py-16 pt-[calc(6rem+4rem)] pb-24 relative overflow-visible flex flex-col items-center justify-center">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 min-h-0 flex flex-col items-center justify-center py-8 sm:py-14">
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

      {/* Values Section - full viewport on desktop so only this section is visible when snapped */}
      <section className="snap-start-flow min-h-screen py-12 sm:py-16 lg:py-24 relative bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
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
              { title: 'Responsibility', desc: 'Mindful consumption and safe, inclusive enjoyment for all.'},
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
      <section className="snap-start-flow pt-12 pb-6 sm:pt-16 sm:pb-8 relative overflow-hidden flex flex-col items-center justify-center">
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
      <section className="snap-start-flow py-12 sm:py-16 lg:py-24 relative overflow-hidden flex flex-col items-center justify-center">
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
              <Link href="/events" className="pixel-btn flex items-center gap-2">See Events</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
