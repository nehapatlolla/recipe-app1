import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ErrorComponent } from './error/error.component';
import { AddrecipieComponent } from './addrecipie/addrecipie.component';
import { BasicComponent } from './basic/basic.component';

export const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipeComponent },
  {
    path: 'addrecipe',
    component: AddrecipieComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
