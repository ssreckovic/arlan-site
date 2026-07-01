import { BookCard } from "./book-card";

type Book = {
  title: string;
  series: string;
  blurb: string;
};

const BOOKS: Book[] = [
  {
    title: "The Datasource",
    series: "Neon Empire Book 1",
    blurb: "In a city of surveillance, secrets are the only currency that matters.",
  },
  {
    title: "Shadow Signal",
    series: "Neon Empire Book 2",
    blurb: "Some messages should never be received.",
  },
  {
    title: "Neon Exodus",
    series: "Neon Empire Book 3",
    blurb: "The escape is only the beginning.",
  },
  {
    title: "System Breakers",
    series: "Standalone Novella",
    blurb: "A rebellion is coded in blood and chrome.",
  },
];

export function BookGrid() {
  return (
    <section id="books" className="flex flex-col gap-6 px-6 sm:px-10">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
          Books
        </h2>
        <a
          href="#all-books"
          className="text-sm font-medium text-accent-pink hover:underline"
        >
          View All Books →
        </a>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {BOOKS.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>
    </section>
  );
}
