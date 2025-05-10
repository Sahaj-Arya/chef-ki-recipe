// Base API URLs by version
export const BASE_URL = "https://www.themealdb.com";

const VERSIONS = {
  v1: "/api/json/v1/1",
};

// Endpoints
export const API_ROUTES = {
  MEALS: {
    BY_CATEGORY: BASE_URL + VERSIONS.v1 + "/filter.php", // Usage: ?c=CategoryName
    BY_ID: BASE_URL + VERSIONS.v1 + "/lookup.php", // Usage ?i=MealId
    RANDOM: BASE_URL + VERSIONS.v1 + "/random.php", // Random meal
    CATEGORIES: BASE_URL + VERSIONS.v1 + "/categories.php", // List all categories
    SEARCH: BASE_URL + VERSIONS.v1 + "/search.php", // Usage: ?s=searchTerm
  },
};
