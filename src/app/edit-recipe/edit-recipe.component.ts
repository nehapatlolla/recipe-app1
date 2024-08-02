import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.scss',
})
export class EditRecipeComponent {
  recipes: any;
  constructor(private recipeService: RecipeService) {}
}
