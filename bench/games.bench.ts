import { bench, describe } from "vitest";
import {
  filterGamesByCategory,
  sortGamesByTitle,
  searchGames,
  getUniqueCategories,
  paginateGames,
  type Game,
} from "../lib/games";
import { getTranslation, getAvailableLanguages } from "../lib/translations";

// --- Test data ---

const categories = ["Action", "Puzzle", "Strategy", "RPG", "Sports", "Racing"];

function generateGames(count: number): Game[] {
  const games: Game[] = [];
  for (let i = 0; i < count; i++) {
    games.push({
      id: i,
      title: `Game ${String(i).padStart(4, "0")}`,
      description: `An exciting ${categories[i % categories.length].toLowerCase()} game with unique mechanics and challenging levels`,
      image: `/images/game-${i}.jpg`,
      category: categories[i % categories.length],
    });
  }
  return games;
}

const smallCatalog = generateGames(50);
const largeCatalog = generateGames(1000);

// --- Benchmarks ---

describe("translations", () => {
  bench("getTranslation - existing language", () => {
    getTranslation("en");
  });

  bench("getTranslation - fallback to default", () => {
    getTranslation("fr");
  });

  bench("getAvailableLanguages", () => {
    getAvailableLanguages();
  });
});

describe("game catalog - small (50 games)", () => {
  bench("filterGamesByCategory", () => {
    filterGamesByCategory(smallCatalog, "Action");
  });

  bench("sortGamesByTitle", () => {
    sortGamesByTitle(smallCatalog);
  });

  bench("searchGames", () => {
    searchGames(smallCatalog, "unique mechanics");
  });

  bench("getUniqueCategories", () => {
    getUniqueCategories(smallCatalog);
  });

  bench("paginateGames", () => {
    paginateGames(smallCatalog, 2, 10);
  });
});

describe("game catalog - large (1000 games)", () => {
  bench("filterGamesByCategory", () => {
    filterGamesByCategory(largeCatalog, "Strategy");
  });

  bench("sortGamesByTitle", () => {
    sortGamesByTitle(largeCatalog);
  });

  bench("searchGames", () => {
    searchGames(largeCatalog, "unique mechanics");
  });

  bench("getUniqueCategories", () => {
    getUniqueCategories(largeCatalog);
  });

  bench("paginateGames", () => {
    paginateGames(largeCatalog, 5, 20);
  });
});
