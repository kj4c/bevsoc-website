import Sparkles from '@/components/Sparkles';

export default function SponsorsPage() {
  const sponsors = {
    gold: [
      { name: 'Premium Beverages Co', tier: 'Gold' },
      { name: 'Craft Coffee Roasters', tier: 'Gold' },
    ],
    silver: [
      { name: 'Local Brewery', tier: 'Silver' },
      { name: 'Tea House', tier: 'Silver' },
      { name: 'Juice Bar', tier: 'Silver' },
    ],
    bronze: [
      { name: 'Campus Cafe', tier: 'Bronze' },
      { name: 'Snack Shop', tier: 'Bronze' },
      { name: 'Bubble Tea Place', tier: 'Bronze' },
      { name: 'Smoothie Stand', tier: 'Bronze' },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--primary)]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[var(--pink-light)] to-[var(--primary)]">
        <Sparkles />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="pixel-window p-8">
            <h1 className="font-pixel-title text-2xl sm:text-3xl text-[var(--accent)] mb-4">
              Our Sponsors
            </h1>
            <p className="font-pixel text-xl text-[var(--foreground)]">
              💕 Thank you to everyone who supports us! 💕
            </p>
          </div>
        </div>
      </section>

      {/* Gold Sponsors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-pixel-title text-lg text-[#FFD700] text-center mb-8 flex items-center justify-center gap-2">
            ⭐ Gold Sponsors ⭐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.gold.map((sponsor) => (
              <div
                key={sponsor.name}
                className="pixel-window p-8 text-center bg-gradient-to-b from-[#FFF8E7] to-[var(--primary-light)]"
                style={{
                  borderColor: '#FFD700',
                  boxShadow: '8px 8px 0 #B8860B, inset -4px -4px 0 #FFF8DC, inset 4px 4px 0 white',
                }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-[#FFD700] border-4 border-[#B8860B] flex items-center justify-center">
                  <span className="font-pixel-title text-2xl text-white">
                    {sponsor.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-pixel text-xl text-[var(--foreground)]">
                  {sponsor.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Silver Sponsors */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-pixel-title text-lg text-[#C0C0C0] text-center mb-8 flex items-center justify-center gap-2">
            ✦ Silver Sponsors ✦
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsors.silver.map((sponsor) => (
              <div
                key={sponsor.name}
                className="pixel-window p-6 text-center"
                style={{
                  borderColor: '#C0C0C0',
                  boxShadow: '6px 6px 0 #808080, inset -3px -3px 0 #E8E8E8, inset 3px 3px 0 white',
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#C0C0C0] border-4 border-[#808080] flex items-center justify-center">
                  <span className="font-pixel-title text-xl text-white">
                    {sponsor.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-pixel text-lg text-[var(--foreground)]">
                  {sponsor.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bronze Sponsors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-pixel-title text-lg text-[#CD7F32] text-center mb-8 flex items-center justify-center gap-2">
            ♦ Bronze Sponsors ♦
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sponsors.bronze.map((sponsor) => (
              <div
                key={sponsor.name}
                className="pixel-window p-4 text-center"
                style={{
                  borderColor: '#CD7F32',
                  boxShadow: '4px 4px 0 #8B4513, inset -2px -2px 0 #DEB887, inset 2px 2px 0 white',
                }}
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-[#CD7F32] border-3 border-[#8B4513] flex items-center justify-center">
                  <span className="font-pixel-title text-sm text-white">
                    {sponsor.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-pixel text-base text-[var(--foreground)]">
                  {sponsor.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="py-20 bg-[var(--accent)] relative overflow-hidden">
        <Sparkles />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-pixel-title text-lg text-[var(--primary)] mb-6">
            Want to Sponsor Us? ✨
          </h2>
          <p className="font-pixel text-xl text-[var(--pink-light)] mb-8">
            Partner with BevSoc and reach our amazing community!
          </p>
          <a
            href="mailto:sponsors@bevsoc.com"
            className="pixel-btn bg-[var(--primary)] text-[var(--accent)]"
            style={{ 
              boxShadow: '4px 4px 0 var(--cream), inset -2px -2px 0 var(--pink), inset 2px 2px 0 white'
            }}
          >
            💌 Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

