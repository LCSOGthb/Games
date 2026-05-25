export interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const games: Game[] = [
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

export function filterByCategory(gameList: Game[], category: string): Game[] {
  return gameList.filter(
    (game) => game.category.toLowerCase() === category.toLowerCase(),
  );
}

export function searchGames(gameList: Game[], query: string): Game[] {
  const lowerQuery = query.toLowerCase();
  return gameList.filter(
    (game) =>
      game.title.toLowerCase().includes(lowerQuery) ||
      game.description.toLowerCase().includes(lowerQuery),
  );
}

export function sortByTitle(gameList: Game[], ascending = true): Game[] {
  return [...gameList].sort((a, b) => {
    const cmp = a.title.localeCompare(b.title);
    return ascending ? cmp : -cmp;
  });
}

export function getCategories(gameList: Game[]): string[] {
  return [...new Set(gameList.map((game) => game.category))].sort();
}

export function getGameById(gameList: Game[], id: number): Game | undefined {
  return gameList.find((game) => game.id === id);
}
