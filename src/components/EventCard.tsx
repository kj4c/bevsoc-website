interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  variant?: 'beige' | 'maroon';
  link?: string;
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
  variant = 'beige',
  link,
}: EventCardProps) {
  const isMaroon = variant === 'maroon';
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const Wrapper = link ? 'a' : 'div';
  const wrapperProps = link
    ? { href: link, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`block p-4 sm:p-6 hover:-translate-y-1 transition-transform duration-200 rounded-lg cursor-pointer ${
        isMaroon
          ? 'bg-accent border-2 border-primary text-primary'
          : 'pixel-window border-l-4 border-accent'
      }`}
    >
      {/* Category Badge */}
      <div
        className="inline-block px-3 py-1 mb-4 font-poppins text-sm text-white border-2"
        style={{
          backgroundColor: categoryColors[category] || categoryColors.other,
          borderColor: isMaroon ? 'var(--primary)' : 'var(--accent-dark)',
        }}
      >
        {categoryEmojis[category] || categoryEmojis.other} {category.toUpperCase()}
      </div>

      {/* Title */}
      <h3
        className={`font-perandory text-xl sm:text-2xl mb-3 leading-relaxed ${
          isMaroon ? 'text-primary' : 'text-accent'
        }`}
      >
        {title}
      </h3>

      {/* Date & Time */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">📅</span>
        <span
          className={`font-poppins text-base sm:text-lg ${
            isMaroon ? 'text-primary' : 'text-accent-dark'
          }`}
        >
          {formatDate(date)} @ {time}
        </span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">📍</span>
        <span
          className={`font-poppins text-base sm:text-lg ${
            isMaroon ? 'text-primary' : 'text-accent-dark'
          }`}
        >
          {location}
        </span>
      </div>

      {/* Description */}
      <p
        className={`font-poppins text-sm sm:text-base leading-relaxed ${
          isMaroon ? 'text-primary' : 'text-accent-dark'
        }`}
      >
        {description}
      </p>
    </Wrapper>
  );
}

