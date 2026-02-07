import Link from 'next/link';

export default function AboutPage() {
  const team = [
    { name: 'Alex Chen', role: 'President' },
    { name: 'Sarah Kim', role: 'Vice President' },
    { name: 'Marcus Johnson', role: 'Events Director' },
    { name: 'Emily Tran', role: 'Treasurer' },
    { name: 'David Park', role: 'Marketing Lead' },
    { name: 'Lisa Wang', role: 'Sponsorship Lead' },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-perandory text-8xl sm:text-8xl text-primary mb-4">
            About Us
          </h1>
          <p className="font-poppins text-4xl text-primary">
            Learn more about BevSoc!
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pixel-window p-8">
            <h2 className="font-perandory text-8xl sm:text-8xl text-accent mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 font-poppins text-2xl text-foreground leading-relaxed">
              <p>
                Founded in 2022, BevSoc emerged from a simple idea: bring together people 
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
      <section className="py-24 relative bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-perandory text-8xl sm:text-8xl text-primary mb-4">
              Our Values
            </h2>
            <p className="font-poppins text-4xl text-primary">
              What we stand for as a community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Inclusivity', desc: 'Everyone is welcome!' },
              { title: 'Education', desc: 'Learn through experience' },
              { title: 'Community', desc: 'Building friendships' },
              { title: 'Responsibility', desc: 'Mindful consumption' },
            ].map((value) => (
              <div
                key={value.title}
                className="pixel-window p-6 hover:-translate-y-1 transition-transform duration-200"
              >
                <h3 className="font-perandory text-4xl text-accent mb-3 underline underline-1">
                  {value.title}
                </h3>
                <p className="font-poppins text-2xl text-accent-light">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-perandory text-8xl sm:text-8xl text-accent mb-4">
              Meet the Team
            </h2>
            <p className="font-poppins text-4xl text-foreground">
              The people behind BevSoc
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="pixel-window p-6 hover:-translate-y-1 transition-transform duration-200"
              >
                <h3 className="font-perandory text-4xl text-accent mb-2 underline underline-1">
                  {member.name}
                </h3>
                <p className="font-poppins text-2xl text-accent-light">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="pixel-window p-8">
            <h2 className="font-perandory text-8xl sm:text-8xl text-accent mb-6">
              Want to Join?
            </h2>
            <p className="font-poppins text-xl text-foreground mb-8">
              We&apos;d love to have you! Reach out to us or join our Discord to stay updated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:contact@bevsoc.com"
                className="pixel-btn flex items-center gap-2"
              >
                Get in Touch
              </a>
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
              <Link href="/events" className="pixel-btn flex items-center gap-2">See Events</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
