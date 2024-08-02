import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RecipeService } from '../recipe.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';


@Component({
  selector: 'app-addrecipie',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatRadioButton
  ],
  templateUrl: './addrecipie.component.html',
  styleUrl: './addrecipie.component.scss',
})



export class AddrecipieComponent {
  [x: string]: any;
  recipeList: any;
  name: any;
  poster:any;
  rating: any;
  steps: any;
  ingredients: any;
  obj = {
    title: '',
    poster: '',
    procedure: '',
    ingredients: '',
    timetaken: '',
    type: '',
    rating: 0,
    category: '',

    
  };
  recipeForm:FormGroup;
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
   ) {
    this.recipeList = this.recipeService.getrecipes();
  
  // addrecipie() {
  //   this.recipeService.addrecipie(this.obj);
  // }


 // formGroup -> formControlName
 this.recipeForm = this.fb.group({
 
  title: ['', [Validators.required, Validators.minLength(2)]],
  poster: [
    '',
    [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern(/^https:.*/),
    ],
  ],
  procedure: ['', [Validators.required, Validators.minLength(3)]],
  rating: [
    '',
    [Validators.required, Validators.min(1), Validators.max(10)],
  ],
  timetaken: '',
  type: ['', [Validators.required, Validators.minLength(3)]],
  category:['', [Validators.required, Validators.minLength(2)]],
  ingredients:['', [Validators.required, Validators.minLength(2)]]
});
}


onSubmit() {
  console.log(this.recipeForm.value);
  // Todo: Fix Add - Technical Debt

  if (this.recipeForm.valid) {
    let newrecipe:any = this.recipeForm.value;
    this.recipeService.addrecipie(newrecipe)
    
      // Move to movies page
      this.router.navigate(['home']);

  }
}



  

  get title() {
    return this.recipeForm.get('title');
  }

  get posterr() {
    return this.recipeForm.get('poster');
  }

  
  get procedure() {
    return this.recipeForm.get('procedure');
  }

  get ratingg() {
    return this.recipeForm.get('rating');
  }

  get timetaken() {
    return this.recipeForm.get('timetaken');
  }

  get type() {
    return this.recipeForm.get('type');
  }

  get category() {
    return this.recipeForm.get('category');
  }

  get ingredientss() {
    return this.recipeForm.get('ingredients');
  }

  addrecipie() {
    this.recipeService
      .addrecipie(this.obj)
      .then(() => this.router.navigate(['home']));
  }
    
   }

