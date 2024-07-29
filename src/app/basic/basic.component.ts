import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
})
export class BasicComponent {
  constructor(private router: Router) {}
  startCooking() {
    this.router.navigate(['/home']);
    console.log('Start Cooking button clicked!');
  }
}
