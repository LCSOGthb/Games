export interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export function filterGamesByCategory(games: Game[], category: string): Game[] {
  return games.filter((game) => game.category === category);
}

export function sortGamesByTitle(games: Game[]): Game[] {
  return [...games].sort((a, b) => a.title.localeCompare(b.title));
}

export function searchGames(games: Game[], query: string): Game[] {
  const lowerQuery = query.toLowerCase();
  return games.filter(
    (game) =>
      game.title.toLowerCase().includes(lowerQuery) ||
      game.description.toLowerCase().includes(lowerQuery)
  );
}

export function getUniqueCategories(games: Game[]): string[] {
  return [...new Set(games.map((game) => game.category))].sort();
}

export function paginateGames(
  games: Game[],
  page: number,
  pageSize: number
): Game[] {
  const start = (page - 1) * pageSize;
  return games.slice(start, start + pageSize);
}
