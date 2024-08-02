import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../app.component';
import { RecipeService } from '../recipe.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { Router, RouterLink } from '@angular/router';
import { RecipeComponent } from '../recipe/recipe.component';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-veg',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    RecipeComponent,
    RouterLink,
    FormsModule,
    MatRadioModule,
  ],
  templateUrl: './veg.component.html',
  styleUrl: './veg.component.scss',
})
export class VegComponent {
  // constructor(private recipeServie: RecipeService) {
  //   console.log(this.recipeServie);
  // }

  constructor(
    private router: Router,
    private recipeService: RecipeService // Inject RecipeService
  ) {}
  @Input()
  id: any;
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
  showRecipe: boolean = false;
  @Output() deleteRecipeEvent = new EventEmitter<any>();
  @Output() editMovieEvent = new EventEmitter<any>();

  clickmethod() {
    this.show = !this.show;
  }

  shown: boolean = false;
  clickmethods() {
    this.shown = !this.shown;
  }

  // @Input() id!: string;
  @Output() deleteRecipieEvent = new EventEmitter<any>();
  @Output() editRecipieEvent = new EventEmitter<any>();

  // show = true;
  // deleteMovie() {
  //   console.log('Child ❌', this.movie);
  //   this.deleteMovieEvent.emit(this.movie);
  // }
  deleteRecioe() {
    this.recipeService.deleterecipie(this.recipes);
    console.log('deleting the recipe', this.recipes);
    this.deleteRecipeEvent.emit(this.recipes);
    console.log('deleting the recipe', this.recipes);

    // this.recipeService.deleterecipie(this.recipes);
  }
  like = 0;
  dislike = 0;
  likeIncrement() {
    this.like = this.like + 1;
  }
  DislikeIncrement() {
    this.dislike = this.dislike + 1;
  }
  showrecipe() {
    console.log('showing...');
    this.showRecipe = !this.showRecipe;
  }
  editRecipe() {
    console.log('edit woriking');
    this.editRecipieEvent.emit(this.recipes);
  }
}
