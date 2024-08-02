import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ErrorComponent } from './error/error.component';
import { AddrecipieComponent } from './addrecipie/addrecipie.component';
import { BasicComponent } from './basic/basic.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

export const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
  },
  {
    path: 'startcooking',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },

  { path: 'home', component: HomeComponent },
  { path: 'recipes/edit/:id', component: EditRecipeComponent },
  { path: 'recipes/:id', component: RecipeComponent },
  {
    path: 'addrecipe',
    component: AddrecipieComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
