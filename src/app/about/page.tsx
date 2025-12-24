import Sparkles from '@/components/Sparkles';

export default function AboutPage() {
  const team = [
    { name: 'Alex Chen', role: 'President', initials: 'AC' },
    { name: 'Sarah Kim', role: 'Vice President', initials: 'SK' },
    { name: 'Marcus Johnson', role: 'Events Director', initials: 'MJ' },
    { name: 'Emily Tran', role: 'Treasurer', initials: 'ET' },
    { name: 'David Park', role: 'Marketing Lead', initials: 'DP' },
    { name: 'Lisa Wang', role: 'Sponsorship Lead', initials: 'LW' },
  ];

  return (
    <div className="min-h-screen bg-[var(--primary)]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[var(--pink-light)] to-[var(--primary)]">
        <Sparkles />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="pixel-window p-8">
            <h1 className="font-bubbly-title text-2xl sm:text-3xl text-[var(--accent)] mb-4">
              About Us
            </h1>
            <p className="font-pixel text-xl text-[var(--foreground)]">
              ✨ Learn more about BevSoc! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pixel-window p-8">
            <h2 className="font-bubbly-title text-lg text-[var(--accent)] mb-6">
              Our Mission 💕
            </h2>
            <div className="space-y-4 font-pixel text-lg text-[var(--foreground)] leading-relaxed">
              <p>
                Founded in 2022, BevSoc emerged from a simple idea: bring together people 
                who appreciate the art and science of beverages! 🍹
              </p>
              <p>
                Whether it's the perfect espresso shot, a vintage wine, or an innovative 
                cocktail — every drink has a story worth exploring~
              </p>
              <p>
                Our mission is to create an inclusive community where members can learn, 
                taste, and connect. From beginners to enthusiasts, everyone is welcome! ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bubbly-title text-lg text-[var(--accent)] text-center mb-12">
            Our Values ✦
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Inclusivity', icon: '🤝', desc: 'Everyone is welcome!' },
              { title: 'Education', icon: '📚', desc: 'Learn through experience~' },
              { title: 'Community', icon: '💫', desc: 'Building friendships!' },
              { title: 'Responsibility', icon: '🌱', desc: 'Mindful consumption~' },
            ].map((value) => (
              <div key={value.title} className="pixel-window p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-bubbly-title text-xs text-[var(--accent)] mb-2">
                  {value.title}
                </h3>
                <p className="font-pixel text-lg text-[var(--foreground)]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bubbly-title text-lg text-[var(--accent)] text-center mb-12">
            Meet the Team 🐻
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="pixel-window p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[var(--accent)] border-4 border-[var(--accent-dark)] flex items-center justify-center">
                    <span className="font-bubbly-title text-xs text-[var(--primary)]">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-pixel text-xl text-[var(--foreground)]">
                      {member.name}
                    </h3>
                    <p className="font-pixel text-lg text-[var(--accent)]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-[var(--accent)] relative overflow-hidden">
        <Sparkles />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-bubbly-title text-lg text-[var(--primary)] mb-6">
            Want to Join? ✨
          </h2>
          <p className="font-pixel text-xl text-[var(--pink-light)] mb-8">
            We'd love to have you! Reach out to us~
          </p>
          <a
            href="mailto:contact@bevsoc.com"
            className="pixel-btn bg-[var(--primary)] text-[var(--accent)]"
            style={{ 
              boxShadow: '4px 4px 0 var(--cream), inset -2px -2px 0 var(--pink), inset 2px 2px 0 white'
            }}
          >
            📧 Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
