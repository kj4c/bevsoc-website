interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

const categoryEmojis: Record<string, string> = {
  social: '🎉',
  workshop: '📚',
  tasting: '🍷',
  other: '✨',
};

const categoryColors: Record<string, string> = {
  social: '#FF69B4',
  workshop: '#87CEEB',
  tasting: '#DDA0DD',
  other: '#98FB98',
};

export default function EventCard({
  title,
  date,
  time,
  location,
  description,
  category,
}: EventCardProps) {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="pixel-window p-6 hover:translate-y-[-4px] transition-transform duration-200">
      {/* Category Badge */}
      <div
        className="inline-block px-3 py-1 mb-4 font-pixel text-sm text-white border-2"
        style={{
          backgroundColor: categoryColors[category] || categoryColors.other,
          borderColor: 'var(--accent-dark)',
        }}
      >
        {categoryEmojis[category] || categoryEmojis.other} {category.toUpperCase()}
      </div>

      {/* Title */}
      <h3 className="font-pixel-title text-sm text-[var(--accent)] mb-3 leading-relaxed">
        {title}
      </h3>

      {/* Date & Time */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">📅</span>
        <span className="font-pixel text-lg text-[var(--foreground)]">
          {formatDate(date)} @ {time}
        </span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">📍</span>
        <span className="font-pixel text-lg text-[var(--foreground)]">
          {location}
        </span>
      </div>

      {/* Description */}
      <p className="font-pixel text-base text-[var(--foreground)] opacity-80 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

