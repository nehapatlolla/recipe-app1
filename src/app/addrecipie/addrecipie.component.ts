import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-addrecipie',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './addrecipie.component.html',
  styleUrl: './addrecipie.component.scss',
})
export class AddrecipieComponent {
  name: string = '';
  poster = '';
  steps = '';
  ingredients = '';
  timetaken = '';
  type = '';

  rating = 0;
  addrecipie() {}
}
