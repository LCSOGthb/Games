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
      className="group flex flex-col h-full rounded-xl overflow-hidden bg-surface border border-border hover:border-border-hover transition-all duration-200 hover:shadow-lg hover:shadow-black/20"
      aria-label={`${game.title} — ${game.category} game`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-surface-light">
        <img
          src={game.image}
          alt={`Preview image for ${game.title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Category badge */}
        <div className="absolute top-3 left-3" aria-hidden="true">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-accent text-white shadow-sm">
            {game.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h2 className="text-lg font-semibold text-white mb-2">
          {game.title}
        </h2>

        <p className="sr-only">Category: {game.category}</p>

        <p className="text-sm text-foreground-muted mb-5 leading-relaxed flex-1">
          {game.description}
        </p>

        <div className="mt-auto">
          <button
            type="button"
            className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:scale-[0.98]"
            aria-label={`Play ${game.title}`}
          >
            Play Now
          </button>
        </div>
      </div>
    </article>
  )
}
