import { Component, Input } from '@angular/core';
import { Recipe } from '../app.component';
import { RecipeService } from '../recipe.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-veg',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './veg.component.html',
  styleUrl: './veg.component.scss',
})
export class VegComponent {
  constructor(private recipeServie: RecipeService) {
    console.log(this.recipeServie);
  }
  @Input()
  recipes = {
    title: '',
    timeTaken: '',
    poster: '',
    ingredients: Array<string>,
    rating: 0,
    procedure: Array<string>,
    description: '',
    type: '',
    category: '',
  };

  show: boolean = false;
  clickmethod() {
    this.show = !this.show;
  }

  shown: boolean = false;
  clickmethods() {
    this.shown = !this.shown;
  }

  deleteRecioe() {
    console.log('deleting the recipe', this.recipes);
    this.recipeServie.deleterecipie(this.recipes);
  }
}
