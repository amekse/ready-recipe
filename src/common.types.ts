type TSuggestion = {
    id : number,
    name: string,
    image: string,
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    cuisine: string,
    difficulty: string
}

type TRecipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};


export type {
    TSuggestion,
    TRecipe
}