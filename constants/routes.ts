// Base API URLs by version

const { EXPO_PUBLIC_BASE_URL, EXPO_PUBLIC_API_URL } = process.env;

const VERSIONS = {
  v1: "/api/json/v1/1",
};

// Endpoints
export const API_ROUTES = {
  MEALS: {
    BY_CATEGORY: EXPO_PUBLIC_BASE_URL + VERSIONS.v1 + "/filter.php", // Usage: ?c=CategoryName
    BY_ID: EXPO_PUBLIC_BASE_URL + VERSIONS.v1 + "/lookup.php", // Usage ?i=MealId
    RANDOM: EXPO_PUBLIC_BASE_URL + VERSIONS.v1 + "/random.php", // Random meal
    CATEGORIES: EXPO_PUBLIC_BASE_URL + VERSIONS.v1 + "/categories.php", // List all categories
    SEARCH: EXPO_PUBLIC_BASE_URL + VERSIONS.v1 + "/search.php", // Usage: ?s=searchTerm
  },
  API: {
    // auth
    LOGIN: EXPO_PUBLIC_API_URL + "/login",
    SIGNUP: EXPO_PUBLIC_API_URL + "/signup",
    FORGOT_PASSWORD: EXPO_PUBLIC_API_URL + "/forgot-password",
    RESET_PASSWORD: EXPO_PUBLIC_API_URL + "/reset-password",

    UPDATE_PROFILE: EXPO_PUBLIC_API_URL + "/update-profile",
    GET_PROFILE: EXPO_PUBLIC_API_URL + "/get-profile",
    GET_NOTIFICATIONS: EXPO_PUBLIC_API_URL + "/get-notifications",
    GET_FAVORITES: EXPO_PUBLIC_API_URL + "/get-favorites",
    GET_RECIPES: EXPO_PUBLIC_API_URL + "/get-recipes",
    GET_RECIPES_BY_ID: EXPO_PUBLIC_API_URL + "/get-recipes-by-id",
    GET_RECIPES_BY_CATEGORY: EXPO_PUBLIC_API_URL + "/get-recipes-by-category",
    GET_RECIPES_BY_INGREDIENT:
      EXPO_PUBLIC_API_URL + "/get-recipes-by-ingredient",
    GET_RECIPES_BY_SEARCH: EXPO_PUBLIC_API_URL + "/get-recipes-by-search",
  },
};
