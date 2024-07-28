import { Component, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { VegComponent } from '../veg/veg.component';

@Component({
  selector: 'app-nonveg',
  standalone: true,
  imports: [VegComponent],
  templateUrl: './nonveg.component.html',
  styleUrl: './nonveg.component.scss',
})
export class NonvegComponent {
  @Input() RecipeList: any;
  // constructor(private recipeService: RecipeService) {
  //   this.RecipeList = this.recipeService.getrecipes();
  // }
}
