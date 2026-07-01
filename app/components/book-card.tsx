type BookCardProps = {
  title: string;
  series: string;
  blurb: string;
  href?: string;
};

export function BookCard({ title, series, blurb, href = "#" }: BookCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex aspect-[2/3] w-full items-end rounded-lg border border-glow/30 bg-gradient-to-b from-surface to-[#1a1030] p-3">
        <span className="font-display text-sm uppercase tracking-wide text-accent-blue">
          {title}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-base text-foreground">{title}</h3>
        <p className="text-xs uppercase tracking-wide text-muted">{series}</p>
        <p className="text-sm text-muted">{blurb}</p>
        <a
          href={href}
          className="mt-1 text-sm font-medium text-accent-pink hover:underline"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
}
