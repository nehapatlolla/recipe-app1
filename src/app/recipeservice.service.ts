// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RecipeserviceService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { Recipe } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class RecipeserviceService {
  private recipes: Recipe[] = [];

  getRecipes() {
    return this.recipes;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push({ ...recipe, id: Date.now() });
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
  }
}
