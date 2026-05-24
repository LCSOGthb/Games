'use client'

import { useState } from 'react'

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
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className="group flex flex-col h-full rounded-xl overflow-hidden bg-surface-light border border-primary/10 transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 active:scale-95"
      aria-label={`${game.title} — ${game.category} game`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-surface">
        <img
          src={game.image}
          alt={`Preview image for ${game.title}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
        
        {/* Category badge */}
        <div className="absolute top-4 right-4" aria-hidden="true">
          <span className="inline-block bg-gradient-to-r from-primary to-accent px-3 py-1.5 rounded-lg text-xs font-bold text-foreground shadow-lg">
            {game.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h2 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
          {game.title}
        </h2>

        <p className="sr-only">Category: {game.category}</p>

        <p className="text-sm text-foreground-secondary mb-6 leading-relaxed flex-1">
          {game.description}
        </p>

        <div className="mt-auto">
          <button
            type="button"
            className="w-full bg-gradient-to-r from-primary to-accent-secondary hover:from-primary hover:to-accent hover:shadow-xl hover:shadow-primary/30 text-foreground font-bold py-3 px-4 rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light active:scale-95 transform"
            aria-label={`Play ${game.title}`}
          >
            Play Now
          </button>
        </div>
      </div>
    </article>
  )
}
