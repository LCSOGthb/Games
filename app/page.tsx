import GameCard from '@/components/GameCard'

const games = [
  {
    id: 1,
    title: 'Chess Master',
    description: 'Play chess against AI or friends',
    image: '/placeholder.svg?height=200&width=300',
    category: 'Strategy',
  },
  {
    id: 2,
    title: 'Quick Quiz',
    description: 'Test your knowledge with fun trivia',
    image: '/placeholder.svg?height=200&width=300',
    category: 'Trivia',
  },
  {
    id: 3,
    title: 'Memory Match',
    description: 'Challenge your memory with this classic game',
    image: '/placeholder.svg?height=200&width=300',
    category: 'Puzzle',
  },
  {
    id: 4,
    title: 'Snake Game',
    description: 'Eat food and grow longer',
    image: '/placeholder.svg?height=200&width=300',
    category: 'Arcade',
  },
  {
    id: 5,
    title: 'Word Builder',
    description: 'Create words from scrambled letters',
    image: '/placeholder.svg?height=200&width=300',
    category: 'Word',
  },
  {
    id: 6,
    title: 'Puzzle Solver',
    description: 'Solve challenging jigsaw puzzles',
    image: '/placeholder.svg?height=200&width=300',
    category: 'Puzzle',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Game Collection
          </h1>
          <p className="text-xl text-gray-600">
            Choose from our selection of fun and challenging games
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </main>
  )
}
