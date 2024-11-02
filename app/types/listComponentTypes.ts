// RecipeTypes.ts

export interface Ingredient {
  name: string;
  calorie: number;
  grams: number;
  image: string;
}

export interface Comment {
  id: string;
  commented_by: string;
  comment: string;
  title: string;
  image: string;
}

export interface Recipe {
  name: string;
  id: number;
  calorie: string;
  ingredients: Ingredient[];
  time_to_prepare: number;
  level: string;
  created_by: string;
  rating: string;
  description: string;
  image: string[];
  comments: Comment[];
}

// Define RecipeList as an array of Recipe objects
export type RecipeList = Recipe[];
