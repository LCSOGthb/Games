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
      <a href="#game-list" className="skip-link">
        Skip to game list
      </a>

      <header className="site-header">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-balance">Game Collection</h1>
          <p className="mt-3 text-base text-muted max-w-xl">
            Discover our selection of fun and challenging games to play
          </p>
        </div>
      </header>

      <main id="main-content" className="bg-base min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <section aria-labelledby="games-heading">
            <div className="flex items-center justify-between mb-8">
              <h2 id="games-heading" className="text-xl font-semibold">
                All Games
              </h2>
              <span className="text-sm text-subtle">
                {games.length} games available
              </span>
            </div>

            <ul
              id="game-list"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              aria-label="Available games"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
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

      <footer
        className="bg-surface border-t"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="text-sm text-subtle text-center">
            Game Collection - Built with Next.js
          </p>
        </div>
      </footer>
    </>
  );
}
