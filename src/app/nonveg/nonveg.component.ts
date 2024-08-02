import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { VegComponent } from '../veg/veg.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-nonveg',
  standalone: true,
  imports: [VegComponent],
  templateUrl: './nonveg.component.html',
  styleUrl: './nonveg.component.scss',
})
export class NonvegComponent {
  @Input() RecipeList: any;
  isLoading: boolean = true;
  msg = '';
  @Output() deleteRecipieEventN = new EventEmitter<any>();
  constructor(private recipeService: RecipeService) {
    // this.RecipeList = this.recipeService.getrecipes();
  }
  // Delete -> Refresh
  // deleteMovieP(movie: IMovie) {
  //   this.movieService.deleteMovie(movie).then(() => this.loadMovies());
  // }
  deleteRecioeP(recipe: any) {
    console.log(recipe);
    console.log(recipe.id);
    // this.recipeService
    //   .deleterecipie(recipe.id)
    //   .then((res) => (this.RecipeList = res));
    this.deleteRecipieEventN.emit(recipe);
    // this.recipeService.deleterecipie(recipe.id).then(() => this.loadRecipes());
  }
}
