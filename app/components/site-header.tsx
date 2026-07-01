import { Button } from "./button";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Books", href: "#" },
  { label: "About", href: "#" },
  { label: "Connect", href: "#" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-glow/20 bg-background/90 px-6 py-4 backdrop-blur sm:px-10">
      <span className="font-display text-lg font-bold tracking-widest text-foreground">
        ARLAN CHEN
      </span>
      <nav className="hidden gap-8 text-sm font-medium uppercase tracking-wide sm:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-muted transition-colors hover:text-accent-pink"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <Button href="#newsletter" variant="outline" size="sm">
        Newsletter
      </Button>
    </header>
  );
}
