// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss'
// })
// export class HomeComponent {

// }

import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../app.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NonvegComponent } from '../nonveg/nonveg.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    FormsModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
    NonvegComponent,
  ],
})
export class HomeComponent {
  searchTerm: string = '';
  recipes: any = [];
  filteredRecipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: ActivatedRoute,
    private route: Router
  ) {
    // this.recipes = this.recipeService.getrecipes();
  }

  ngOnInit() {
    this.loadRecipes();
  }
  loadRecipes() {
    this.recipeService.getrecipes().then((data: any) => {
      this.recipes = data;
      this.filteredRecipes = this.recipes;
    });
  }
  onSearch() {
    this.filteredRecipes = this.recipes.filter(
      (recipe: any) =>
        recipe.title
          .toLowerCase()
          .includes(this.searchTerm.toLocaleLowerCase()) ||
        recipe.type
          .toLowerCase()
          .includes(this.searchTerm.toLocaleLowerCase()) ||
        recipe.category
          .toLowerCase()
          .includes(this.searchTerm.toLocaleLowerCase())
    );

    //this.selectedCategory= this.recipes.filter((recipee: any) =>this.recipee.category.toLowerCase() === this.selectedCategory.toLowerCase() );
  }
  deleteRecioeP(recipe: any) {
    this.recipeService.deleterecipie(recipe.id).then(() => this.loadRecipes());
  }
  editRecioeP(recipe: any) {
    this.route.navigate([`recipes/edit/${recipe.id}`]);
  }
}
