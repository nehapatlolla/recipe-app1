import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { VegComponent } from './veg/veg.component';
import { AddrecipieComponent } from './addrecipie/addrecipie.component';
import { HomeComponent } from './home/home.component';
import { NonvegComponent } from './nonveg/nonveg.component';

export interface Recipe {
  title: string;
  timeTaken: string;
  poster: string;
  ingredients: string;
  procedure: string;
  type: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    VegComponent,
    AddrecipieComponent,
    HomeComponent,
    NonvegComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'recipe-app';
}
