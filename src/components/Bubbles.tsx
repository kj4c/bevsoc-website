'use client';

export default function Bubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="bubble animate-bubble"
          style={{
            left: `${10 + Math.random() * 80}%`,
            width: `${30 + Math.random() * 60}px`,
            height: `${30 + Math.random() * 60}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

