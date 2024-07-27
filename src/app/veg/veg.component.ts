import { Component, Input } from '@angular/core';
import { Recipe } from '../app.component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-veg',
  standalone: true,
  imports: [],
  templateUrl: './veg.component.html',
  styleUrl: './veg.component.scss',
})
export class VegComponent {
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
  };

  show: boolean = false;
  clickmethod() {
    this.show = !this.show;
  }

  shown: boolean = false;
  clickmethods() {
    this.shown = !this.shown;
  }
  addrecipie() {}
}
