import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
export interface Recipe {
  id: number;
  title: string;
  timeTaken: string;
  imageUrl: string;
  ingredients: string;
  procedure: string;
  category: 'veg' | 'non-veg';
  description: string;
}
import { VegComponent } from './veg/veg.component';
import { AddrecipieComponent } from './addrecipie/addrecipie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VegComponent, AddrecipieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'recipe-app';
}
