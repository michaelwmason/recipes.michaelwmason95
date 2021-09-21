import { Ingredient } from './ingredient';

export class Recipe {
  name: string;
  description: string;
  cookTimeMiutes: number;
  directions: string;
  ingredients: Ingredient[];
  pictureLocation: string;

  constructor(
    name: string,
    description: string,
    cookTimeMiutes: number,
    directions: string,
    ingredients: Ingredient[]
  ) {
    this.name = name ?? '';
    this.description = description ?? '';
    this.cookTimeMiutes = cookTimeMiutes ?? 0;
    this.directions = directions ?? '';
    this.ingredients = ingredients ?? [];
    this.pictureLocation = '';
  }
}
