class Meal {
  id: string;
  categoryIds: string[];
  title: string;
  imageUrl: string;
  ingredients: string[];
  steps: string[];
  duration: number;
  complexity: "simple" | "challenging" | "hard";
  affordability: "affordable" | "pricey" | "luxurious";
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;

  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    affordability: "affordable" | "pricey" | "luxurious",
    complexity: "simple" | "challenging" | "hard",
    imageUrl: string,
    duration: number,
    ingredients: string[],
    steps: string[],
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLactoseFree: boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
