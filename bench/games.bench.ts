import { bench, describe } from "vitest";
import {
  games,
  filterByCategory,
  searchGames,
  sortByTitle,
  getCategories,
  getGameById,
} from "@/lib/games";
import type { Game } from "@/lib/games";

// Build a larger dataset from the base games for more realistic benchmarks
function generateLargeGameList(size: number): Game[] {
  const categories = [
    "Strategy",
    "Trivia",
    "Puzzle",
    "Arcade",
    "Word",
    "RPG",
    "Action",
    "Simulation",
  ];
  const result: Game[] = [];
  for (let i = 0; i < size; i++) {
    result.push({
      id: i + 1,
      title: `Game ${i + 1}`,
      description: `Description for game number ${i + 1} with various keywords and details.`,
      image: `/placeholder.svg?height=200&width=300`,
      category: categories[i % categories.length],
    });
  }
  return result;
}

const largeGameList = generateLargeGameList(1000);

describe("filterByCategory", () => {
  bench("filter base games by category", () => {
    filterByCategory(games, "Puzzle");
  });

  bench("filter 1000 games by category", () => {
    filterByCategory(largeGameList, "Puzzle");
  });
});

describe("searchGames", () => {
  bench("search base games by title", () => {
    searchGames(games, "chess");
  });

  bench("search 1000 games by keyword", () => {
    searchGames(largeGameList, "keywords");
  });

  bench("search with no results", () => {
    searchGames(largeGameList, "nonexistent-query-string");
  });
});

describe("sortByTitle", () => {
  bench("sort base games ascending", () => {
    sortByTitle(games);
  });

  bench("sort 1000 games ascending", () => {
    sortByTitle(largeGameList);
  });

  bench("sort 1000 games descending", () => {
    sortByTitle(largeGameList, false);
  });
});

describe("getCategories", () => {
  bench("get categories from base games", () => {
    getCategories(games);
  });

  bench("get categories from 1000 games", () => {
    getCategories(largeGameList);
  });
});

describe("getGameById", () => {
  bench("find first game by id", () => {
    getGameById(games, 1);
  });

  bench("find last game by id in 1000 games", () => {
    getGameById(largeGameList, 1000);
  });
});
