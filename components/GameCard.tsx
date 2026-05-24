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
      className="card group flex flex-col h-full"
      aria-label={`${game.title} — ${game.category} game`}
    >
      {/* Image Container */}
      <div 
        className="relative h-44 overflow-hidden"
        style={{ backgroundColor: 'var(--bg-elevated)' }}
      >
        <img
          src={game.image}
          alt={`Preview image for ${game.title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Category badge */}
        <div className="absolute top-3 left-3" aria-hidden="true">
          <span className="badge">{game.category}</span>
        </div>
      </div>

      {/* Content */}
      <div 
        className="flex flex-col flex-1 p-5"
        style={{ borderTop: '1px solid var(--border-subtle)' }}
      >
        <h2 
          className="text-lg font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {game.title}
        </h2>

        <p className="sr-only">Category: {game.category}</p>

        <p 
          className="text-sm leading-relaxed flex-1 mb-5"
          style={{ color: 'var(--text-secondary)' }}
        >
          {game.description}
        </p>

        <div className="mt-auto">
          <button
            type="button"
            className="btn-primary w-full"
            aria-label={`Play ${game.title}`}
          >
            Play Now
          </button>
        </div>
      </div>
    </article>
  )
}
