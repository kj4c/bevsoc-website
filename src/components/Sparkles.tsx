'use client';

export default function Sparkles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sparkles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-[var(--pink-light)] animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            fontSize: `${8 + Math.random() * 12}px`,
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
}

