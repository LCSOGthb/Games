import GameCard from "@/components/GameCard";

const games = [
  {
    id: 1,
    title: "Chess Master",
    description: "Play chess against AI or friends online in real time.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Strategy",
  },
  {
    id: 2,
    title: "Quick Quiz",
    description: "Test your knowledge with fun trivia questions.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Trivia",
  },
  {
    id: 3,
    title: "Memory Match",
    description: "Challenge your memory with this classic card-matching game.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Puzzle",
  },
  {
    id: 4,
    title: "Snake Game",
    description: "Eat food, grow longer, and avoid running into yourself.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Arcade",
  },
  {
    id: 5,
    title: "Word Builder",
    description: "Create as many words as you can from scrambled letters.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Word",
  },
  {
    id: 6,
    title: "Puzzle Solver",
    description: "Solve challenging jigsaw puzzles of increasing difficulty.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Puzzle",
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#game-list"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:font-semibold"
      >
        Skip to game list
      </a>

      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Game Collection
          </h1>
          <p className="text-foreground-muted mt-2 text-base">
            Discover our selection of fun and challenging games
          </p>
        </div>
      </header>

      <main id="main-content" className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section aria-labelledby="games-heading">
            <h2 id="games-heading" className="sr-only">
              Available Games
            </h2>

            <ul
              id="game-list"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0"
              aria-label="Available games"
            >
              {games.map((game) => (
                <li key={game.id}>
                  <GameCard game={game} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
