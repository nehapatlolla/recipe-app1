import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
export interface Recipe {
  title: string;
  timeTaken: string;
  imageUrl: string;
  ingredients: Array<string>;
  procedure: Array<string>;
  rating: number;
  description: string;
}
import { VegComponent } from './veg/veg.component';
import { AddrecipieComponent } from './addrecipie/addrecipie.component';
import { HomeComponent } from './home/home.component';
import { NonvegComponent } from './nonveg/nonveg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    VegComponent,
    AddrecipieComponent,
    HomeComponent,
    NonvegComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'recipe-app';
}
