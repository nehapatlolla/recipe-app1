import { Component, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  Recipes!: any;

  isLoading: boolean = false;
  trustedUrl: any;
  constructor(
    private recipeServie: RecipeService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    console.log(this.recipeServie);
  }

  // @Input()
  // recipes = {
  //   title: '',
  //   timeTaken: '',
  //   poster: '',
  //   ingredients: Array<string>,
  //   rating: 0,
  //   procedure: Array<string>,
  //   description: '',
  //   type: '',
  //   category: '',
  // };
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string;
    console.log(id);
    this.recipeServie.getRecipeById(id).then((data: any) => {
      this.Recipes = data;
      this.isLoading = false;
    });
    console.log(this.Recipes);
    // this.movieService.getMoviesByIdp(id).then((data) => {
    //   this.Movies = data;
    //   this.isLoading = false;
    //   this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    //     this.Movies.trailer
    //   );
    // });
  }
}
