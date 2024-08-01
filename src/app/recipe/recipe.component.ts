import { Component, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  route: any;
  movieService: any;
  Movies: any;
  isLoading: boolean = false;
  trustedUrl: any;
  sanitizer: any;
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

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string;
    // this.movieService.getMoviesByIdp(id).then((data) => {
    //   this.Movies = data;
    //   this.isLoading = false;
    //   this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    //     this.Movies.trailer
    //   );
    // });
  }
}
