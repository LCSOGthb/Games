'use client'

interface GameCardProps {
  game: {
    id: number
    title: string
    description: string
    image: string
    category: string
  }
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl bg-white">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <img
            src={game.image}
            alt={game.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3">
            <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {game.category}
            </span>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
            {game.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {game.description}
          </p>

          {/* Button */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 active:scale-95">
            Play Now
          </button>
        </div>
      </div>
    </div>
  )
}
