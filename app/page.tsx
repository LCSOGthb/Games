import GameCard from '@/components/GameCard'

const games = [
  {
    id: 1,
    title: 'Chess Master',
    description: 'Play chess against AI or friends online in real time.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'Strategy',
  },
  {
    id: 2,
    title: 'Quick Quiz',
    description: 'Test your knowledge with fun trivia questions.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'Trivia',
  },
  {
    id: 3,
    title: 'Memory Match',
    description: 'Challenge your memory with this classic card-matching game.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'Puzzle',
  },
  {
    id: 4,
    title: 'Snake Game',
    description: 'Eat food, grow longer, and avoid running into yourself.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'Arcade',
  },
  {
    id: 5,
    title: 'Word Builder',
    description: 'Create as many words as you can from scrambled letters.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'Word',
  },
  {
    id: 6,
    title: 'Puzzle Solver',
    description: 'Solve challenging jigsaw puzzles of increasing difficulty.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'Puzzle',
  },
]

export default function Home() {
  return (
    <>
      <a
        href="#game-list"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:font-semibold"
      >
        Skip to game list
      </a>

      <main id="main-content" className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-6xl">

          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-3 text-balance">
              Game Collection
            </h1>
            <p className="text-lg text-gray-700 text-balance">
              Choose from our selection of fun and challenging games
            </p>
          </header>

          <ul
            id="game-list"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0"
            aria-label="Available games"
          >
            {games.map((game) => (
              <li key={game.id}>
                <GameCard game={game} />
              </li>
            ))}
          </ul>

        </div>
      </main>
    </>
  )
}
