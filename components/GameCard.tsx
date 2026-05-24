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
    <article
      className="flex flex-col rounded-lg shadow-md bg-white overflow-hidden transition-shadow duration-300 hover:shadow-xl"
      aria-label={`${game.title} — ${game.category} game`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={game.image}
          alt={`Preview image for ${game.title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3" aria-hidden="true">
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {game.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h2 className="text-lg font-bold text-gray-900 mb-1">
          {game.title}
        </h2>

        <p className="sr-only">Category: {game.category}</p>

        <p className="text-sm text-gray-700 mb-5 leading-relaxed">
          {game.description}
        </p>

        <div className="mt-auto">
          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95"
            aria-label={`Play ${game.title}`}
          >
            Play Now
          </button>
        </div>
      </div>
    </article>
  )
}
