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
  // recipe = {
  //   title: 'Chicken Alfredo',
  //   image:
  //     'https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg',
  //   ingredients: [
  //     '2 tablespoons olive oil',
  //     '2 boneless, skinless chicken breasts',
  //     'Salt and pepper to taste',
  //     '2 cloves garlic, minced',
  //     '1 cup heavy cream',
  //     '1 cup grated Parmesan cheese',
  //     '1 cup chicken broth',
  //     '8 oz fettuccine pasta',
  //     '2 tablespoons chopped parsley for garnish',
  //   ],
  //   procedure: [
  //     'Cook the fettuccine according to package instructions. Drain and set aside.',
  //     'Heat olive oil in a large skillet over medium heat. Season chicken breasts with salt and pepper.',
  //     'Cook chicken in the skillet for 6-7 minutes per side, or until fully cooked. Remove from skillet and slice.',
  //     'In the same skillet, add garlic and cook until fragrant.',
  //     'Add heavy cream and chicken broth. Bring to a simmer and stir in Parmesan cheese until the sauce is smooth.',
  //     'Add the cooked fettuccine to the sauce and toss to coat.',
  //     'Top with sliced chicken and garnish with chopped parsley before serving.',
  //   ],
  //   timetaken: '30 minutes',
  //   type: 'Main Course',
  //   rating: 4.6,
  // };

  // @Input() Allrecipe: any;

  // title = '';
  // timeTaken = '';
  // imageUrl = '';
  // ingredients = Array<string>;
  // rating = 0;
  // procedure = Array<string>;
  // description = '';
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

  // constructor(public resService: RecipeService) {
  //   this.recipes = this.resService.getrecipes();
  // }

  // constructor(public resval: RecipeService) {
  //   this.re;
  // }
  // addrecipie() {
  //   let newrecipe: Recipe = {
  //     title: this.title,

  //     timeTaken: this.timeTaken,
  //     imageUrl: this.imageUrl,
  //     ingredients: this.ingredients.split(' , '),
  //     procedure: this.procedure,

  //     description: this.description,
  //   };
  //   //this.ReciepsList.push(newrecipe)
  // }

  show: boolean = false;
  clickmethod() {
    this.show = !this.show;
  }

  shown: boolean = false;
  clickmethods() {
    this.shown = !this.shown;
  }
}
