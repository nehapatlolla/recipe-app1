import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  //     title: 'Vegetable Stir-Fry',
  //     ingredients: [
  //       '2 tablespoons vegetable oil',
  //       '1 bell pepper, sliced',
  //       '1 cup broccoli florets',
  //       '1 cup snap peas',
  //       '2 cloves garlic, minced',
  //       '2 tablespoons soy sauce',
  //       '1 tablespoon hoisin sauce',
  //       '1 teaspoon sesame seeds',
  //     ],
  //     procedure: [
  //       'Heat the vegetable oil in a large skillet over medium-high heat.',
  //       'Add the bell pepper, broccoli, and snap peas. Stir-fry for about 5 minutes.',
  //       'Add the minced garlic and cook for an additional minute.',
  //       'Stir in the soy sauce and hoisin sauce. Cook for another 2 minutes.',
  //       'Sprinkle with sesame seeds before serving.',
  //     ],
  //     timetaken: '15 minutes',
  //     type: 'Main Course',
  //     rating: 4.5,
  //     category: 'Veg', // Added category
  //     poster:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5igQTy4xBK0yhNXVAJU_1NAOsKAdKcqB5dw&s',
  //   },
  //   {
  //     title: 'Chickpea Salad',
  //     ingredients: [
  //       '1 can chickpeas, drained and rinsed',
  //       '1 cucumber, diced',
  //       '1 cup cherry tomatoes, halved',
  //       '1/4 red onion, finely chopped',
  //       '1/4 cup chopped parsley',
  //       '3 tablespoons olive oil',
  //       '2 tablespoons lemon juice',
  //       'Salt and pepper to taste',
  //     ],
  //     procedure: [
  //       'In a large bowl, combine the chickpeas, cucumber, cherry tomatoes, red onion, and parsley.',
  //       'In a small bowl, whisk together the olive oil and lemon juice.',
  //       'Pour the dressing over the salad and toss to combine.',
  //       'Season with salt and pepper to taste.',
  //     ],
  //     timetaken: '10 minutes',
  //     type: 'Salad',
  //     rating: 4.8,
  //     category: 'Veg', // Added category
  //     poster:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdtdbrByR_82n-ELyELB1kHGyB4k7NVrcow&s',
  //   },
  //   {
  //     title: 'Vegetarian Chili',
  //     ingredients: [
  //       '2 tablespoons olive oil',
  //       '1 onion, chopped',
  //       '2 cloves garlic, minced',
  //       '1 bell pepper, chopped',
  //       '2 cans diced tomatoes',
  //       '1 can kidney beans, drained and rinsed',
  //       '1 can black beans, drained and rinsed',
  //       '1 cup corn kernels',
  //       '2 tablespoons chili powder',
  //       '1 teaspoon cumin',
  //       'Salt and pepper to taste',
  //     ],
  //     procedure: [
  //       'Heat the olive oil in a large pot over medium heat.',
  //       'Add the onion and garlic, and cook until the onion is translucent.',
  //       'Add the bell pepper and cook for another 5 minutes.',
  //       'Stir in the diced tomatoes, kidney beans, black beans, corn, chili powder, and cumin.',
  //       'Simmer for 20 minutes, stirring occasionally.',
  //       'Season with salt and pepper to taste before serving.',
  //     ],
  //     timetaken: '30 minutes',
  //     type: 'Main Course',
  //     rating: 4.7,
  //     category: 'Veg', // Added category
  //     poster:
  //       'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Vegetarian-chilli-206c469.jpg?resize=768,574',
  //   },
  //   {
  //     title: 'Spinach and Feta Stuffed Mushrooms',
  //     ingredients: [
  //       '12 large mushrooms, stems removed',
  //       '1 tablespoon olive oil',
  //       '2 cups fresh spinach, chopped',
  //       '1/2 cup crumbled feta cheese',
  //       '1/4 cup breadcrumbs',
  //       '1 clove garlic, minced',
  //       'Salt and pepper to taste',
  //     ],
  //     procedure: [
  //       'Preheat the oven to 375°F (190°C).',
  //       'Heat the olive oil in a skillet over medium heat. Add the garlic and cook until fragrant.',
  //       'Add the spinach and cook until wilted. Remove from heat and stir in the feta cheese.',
  //       'Stuff each mushroom cap with the spinach and feta mixture.',
  //       'Sprinkle the breadcrumbs over the stuffed mushrooms.',
  //       'Place the mushrooms on a baking sheet and bake for 20 minutes, or until the mushrooms are tender and the topping is golden brown.',
  //     ],
  //     timetaken: '25 minutes',
  //     type: 'Appetizer',
  //     rating: 4.6,
  //     category: 'Veg', // Added category
  //     poster:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4V5FV5Z9rWGY2s-VXw9VIbr3CPtVF4aLaA&s',
  //   },
  //   {
  //     title: 'Lentil Soup',
  //     ingredients: [
  //       '1 tablespoon olive oil',
  //       '1 onion, diced',
  //       '2 carrots, diced',
  //       '2 celery stalks, diced',
  //       '3 cloves garlic, minced',
  //       '1 cup dried lentils',
  //       '1 can diced tomatoes',
  //       '4 cups vegetable broth',
  //       '1 teaspoon thyme',
  //       '1 bay leaf',
  //       'Salt and pepper to taste',
  //     ],
  //     procedure: [
  //       'Heat the olive oil in a large pot over medium heat.',
  //       'Add the onion, carrots, and celery. Cook until softened, about 5 minutes.',
  //       'Add the garlic and cook for another minute.',
  //       'Stir in the lentils, diced tomatoes, vegetable broth, thyme, and bay leaf.',
  //       'Bring to a boil, then reduce heat and simmer for 25-30 minutes, or until lentils are tender.',
  //       'Remove the bay leaf and season with salt and pepper before serving.',
  //     ],
  //     timetaken: '40 minutes',
  //     type: 'Soup',
  //     rating: 4.4,
  //     category: 'Veg', // Added category
  //     poster:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTwiwE3eGMsi3i-KSa2hzdolSWCEmSWGAg6w&s',
  //   },
  //   {
  //     title: 'Stuffed Bell Peppers',
  //     ingredients: [
  //       '4 large bell peppers',
  //       '1 cup cooked quinoa',
  //       '1 can black beans, drained and rinsed',
  //       '1 cup corn kernels',
  //       '1 cup diced tomatoes',
  //       '1/2 cup shredded cheddar cheese',
  //       '1 teaspoon cumin',
  //       '1/2 teaspoon paprika',
  //       'Salt and pepper to taste',
  //     ],
  //     procedure: [
  //       'Preheat the oven to 375°F (190°C).',
  //       'Cut the tops off the bell peppers and remove seeds and membranes.',
  //       'In a bowl, combine the quinoa, black beans, corn, diced tomatoes, cheddar cheese, cumin, paprika, salt, and pepper.',
  //       'Stuff each bell pepper with the mixture and place them in a baking dish.',
  //       'Cover with foil and bake for 30 minutes.',
  //       'Remove the foil and bake for an additional 10 minutes, or until the peppers are tender.',
  //     ],
  //     timetaken: '45 minutes',
  //     type: 'Main Course',
  //     rating: 4.6,
  //     category: 'Veg', // Added category
  //     poster:
  //       'https://www.allrecipes.com/thmb/eBsB2933MCuNVCim4O-AyCR97YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79805-StuffedPeppersWithturkeyAndVegtables-MFS-2x3-0048-444ecb49b0184daab29e5326e4330af3.jpg',
  //   },
  //   {
  //     title: 'Sweet Potato and Black Bean Tacos',
  //     ingredients: [
  //       '2 tablespoons olive oil',
  //       '2 large sweet potatoes, peeled and diced',
  //       '1 can black beans, drained and rinsed',
  //       '1 teaspoon chili powder',
  //       '1/2 teaspoon cumin',
  //       'Salt and pepper to taste',
  //       'Taco shells or tortillas',
  //       'Your choice of toppings (e.g., avocado, salsa, cilantro)',
  //     ],
  //     procedure: [
  //       'Preheat the oven to 400°F (200°C).',
  //       'Toss the sweet potato cubes with olive oil, chili powder, cumin, salt, and pepper.',
  //       'Spread the sweet potatoes on a baking sheet and roast for 25-30 minutes, or until tender.',
  //       'In a bowl, mix the roasted sweet potatoes with the black beans.',
  //       'Serve in taco shells or tortillas with your choice of toppings.',
  //     ],
  //     timetaken: '35 minutes',
  //     type: 'Main Course',
  //     rating: 4.7,
  //     category: 'Veg', // Added category
  //     poster:
  //       'https://joyfoodsunshine.com/wp-content/uploads/2018/01/vegetarian-black-bean-sweet-potato-tacos-13.jpg',
  //   },
  //   {
  //     title: 'Cauliflower Curry',
  //     ingredients: [
  //       '2 tablespoons vegetable oil',
  //       '1 onion, chopped',
  //       '2 cloves garlic, minced',
  //       '1 tablespoon ginger, minced',
  //       '1 tablespoon curry powder',
  //       '1 teaspoon turmeric',
  //       '1 can diced tomatoes',
  //       '1 cauliflower, cut into florets',
  //       '1 cup coconut milk',
  //       'Salt to taste',
  //     ],
  //     procedure: [
  //       'Heat the vegetable oil in a large pan over medium heat.',
  //       'Add the onion, garlic, and ginger, and cook until the onion is translucent.',
  //       'Stir in the curry powder and turmeric, and cook for 1 minute.',
  //       'Add the diced tomatoes and cauliflower florets, and stir to combine.',
  //       'Pour in the coconut milk and bring to a simmer.',
  //       'Cook for 20 minutes, or until the cauliflower is tender.',
  //       'Season with salt before serving.',
  //     ],
  //     timetaken: '30 minutes',
  //     type: 'Main Course',
  //     rating: 4.5,
  //     category: 'Veg', // Added category
  //     poster:
  //       'https://thealmondeater.com/wp-content/uploads/2022/02/Cauliflower-Curry_web-7.jpg',
  //   },
  //   {
  //     title: 'Chicken Alfredo',
  //     ingredients: [
  //       '8 oz fettuccine pasta',
  //       '2 tablespoons olive oil',
  //       '1 lb chicken breast, sliced',
  //       '2 cloves garlic, minced',
  //       '1 cup heavy cream',
  //       '1 cup grated Parmesan cheese',
  //       'Salt and pepper to taste',
  //       '2 tablespoons chopped parsley',
  //     ],
  //     procedure: [
  //       'Cook the fettuccine according to package instructions. Drain and set aside.',
  //       'Heat the olive oil in a large skillet over medium heat. Add the chicken and cook until browned and cooked through.',
  //       'Add the garlic and cook for another minute.',
  //       'Pour in the heavy cream and bring to a simmer.',
  //       'Stir in the Parmesan cheese until melted and smooth.',
  //       'Add the cooked fettuccine and toss to coat.',
  //       'Season with salt and pepper, and garnish with chopped parsley before serving.',
  //     ],
  //     timetaken: '30 minutes',
  //     type: 'Main Course',
  //     rating: 4.6,
  //     category: 'Non-Veg', // Added category
  //     poster:
  //       'https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg',
  //   },
  //   {
  //     title: 'Beef Stroganoff',
  //     ingredients: [
  //       '1 lb beef sirloin, thinly sliced',
  //       '2 tablespoons olive oil',
  //       '1 onion, chopped',
  //       '2 cloves garlic, minced',
  //       '1 cup beef broth',
  //       '1 cup sour cream',
  //       '1 tablespoon flour',
  //       'Salt and pepper to taste',
  //       '2 tablespoons chopped parsley',
  //     ],
  //     procedure: [
  //       'Heat the olive oil in a large skillet over medium-high heat. Add the beef and cook until browned.',
  //       'Remove the beef and set aside. In the same skillet, add the onion and garlic, and cook until softened.',
  //       'Stir in the flour and cook for 1 minute.',
  //       'Add the beef broth and bring to a simmer.',
  //       'Return the beef to the skillet and cook until heated through.',
  //       'Stir in the sour cream and cook until the sauce is thickened.',
  //       'Season with salt and pepper, and garnish with chopped parsley before serving.',
  //     ],
  //     timetaken: '30 minutes',
  //     type: 'Main Course',
  //     rating: 4.7,
  //     category: 'Non-Veg', // Added category
  //     poster:
  //       'https://www.gimmesomeoven.com/wp-content/uploads/2020/10/Beef-Stroganoff-Recipe-9.jpg',
  //   },
  //   {
  //     title: 'Shrimp Scampi',
  //     ingredients: [
  //       '1 lb large shrimp, peeled and deveined',
  //       '8 oz linguine pasta',
  //       '4 tablespoons butter',
  //       '4 cloves garlic, minced',
  //       '1/4 cup white wine',
  //       '1 tablespoon lemon juice',
  //       '2 tablespoons chopped parsley',
  //       'Salt and pepper to taste',
  //     ],
  //     procedure: [
  //       'Cook the linguine according to package instructions. Drain and set aside.',
  //       'Heat the butter in a large skillet over medium heat. Add the garlic and cook until fragrant.',
  //       'Add the shrimp and cook until pink and cooked through.',
  //       'Pour in the white wine and lemon juice, and simmer for 2 minutes.',
  //       'Add the cooked linguine and toss to combine.',
  //       'Season with salt and pepper, and garnish with chopped parsley before serving.',
  //     ],
  //     timetaken: '25 minutes',
  //     type: 'Main Course',
  //     rating: 4.8,
  //     category: 'Non-Veg', // Added category
  //     poster:
  //       'https://static01.nyt.com/images/2022/06/02/dining/ShrimpScampi_thumb/ShrimpScampi_thumb-square640.jpg',
  //   },
  //   {
  //     title: 'Pork Tenderloin with Apples',
  //     ingredients: [
  //       '1 lb pork tenderloin',
  //       '2 tablespoons olive oil',
  //       '2 apples, sliced',
  //       '1 onion, sliced',
  //       '1/2 cup chicken broth',
  //       '1 tablespoon honey',
  //       '1 teaspoon dried thyme',
  //       'Salt and pepper to taste',
  //     ],
  //     procedure: [
  //       'Preheat the oven to 400°F (200°C).',
  //       'Heat the olive oil in a skillet over medium-high heat. Sear the pork tenderloin on all sides until browned.',
  //       'Transfer the pork to a baking dish. Arrange the apples and onion around the pork.',
  //       'In a small bowl, mix the chicken broth, honey, thyme, salt, and pepper.',
  //       'Pour the mixture over the pork and apples.',
  //       'Bake for 25-30 minutes, or until the pork is cooked through and the apples are tender.',
  //     ],
  //     timetaken: '40 minutes',
  //     type: 'Main Course',
  //     rating: 4.6,
  //     category: 'Non-Veg', // Added category
  //     poster:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0k7OateHdr_JPhwuEvxrs5uIrMpzeHddkbw&s%27',
  //   },
  //   {
  //     title: 'Chicken Tikka Masala',
  //     ingredients: [
  //       '1 lb chicken breast, cut into cubes',
  //       '1 cup plain yogurt',
  //       '2 tablespoons lemon juice',
  //       '2 tablespoons vegetable oil',
  //       '1 onion, finely chopped',
  //       '3 cloves garlic, minced',
  //       '1 tablespoon ginger, minced',
  //       '1 can diced tomatoes',
  //       '1/2 cup heavy cream',
  //       '2 tablespoons tikka masala spice mix',
  //       'Salt and pepper to taste',
  //       'Chopped cilantro for garnish',
  //     ],
  //     procedure: [
  //       'Marinate chicken in yogurt, lemon juice, salt, and pepper for at least 1 hour.',
  //       'Heat oil in a skillet over medium heat. Cook onions, garlic, and ginger until soft.',
  //       'Add the marinated chicken and cook until browned.',
  //       'Stir in diced tomatoes, tikka masala spice mix, and simmer for 10 minutes.',
  //       'Add heavy cream and cook for another 5 minutes.',
  //       'Garnish with chopped cilantro before serving.',
  //     ],
  //     timetaken: '45 minutes',
  //     type: 'Main Course',
  //     rating: 4.7,
  //     category: 'Non-Veg',
  //     poster:
  //       'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Tikka-Masala-min-750x750.jpg',
  //   },
  //   {
  //     title: 'Palak Paneer',
  //     ingredients: [
  //       '2 cups spinach, chopped',
  //       '1 cup paneer, cubed',
  //       '1 onion, finely chopped',
  //       '2 cloves garlic, minced',
  //       '1 tablespoon ginger, minced',
  //       '1 tomato, chopped',
  //       '1/2 cup cream',
  //       '1 teaspoon cumin seeds',
  //       '1 teaspoon garam masala',
  //       '1/2 teaspoon turmeric powder',
  //       'Salt and pepper to taste',
  //       '2 tablespoons vegetable oil',
  //     ],
  //     procedure: [
  //       'Heat oil in a pan and add cumin seeds.',
  //       'Add onions, garlic, and ginger, and cook until onions are translucent.',
  //       'Add chopped tomatoes, turmeric powder, and salt. Cook until tomatoes are soft.',
  //       'Add chopped spinach and cook until wilted.',
  //       'Blend the mixture into a smooth paste.',
  //       'Return the paste to the pan, add paneer cubes, and cook for 5 minutes.',
  //       'Stir in cream and garam masala, and cook for another 5 minutes.',
  //     ],
  //     timetaken: '30 minutes',
  //     type: 'Main Course',
  //     rating: 4.6,
  //     category: 'Veg',
  //     poster:
  //       'https://www.indianveggiedelight.com/wp-content/uploads/2017/10/palak-paneer-recipe-featured.jpg',
  //   },
  //   {
  //     title: 'Chole (Chickpea Curry)',
  //     ingredients: [
  //       '2 cups chickpeas, soaked overnight and boiled',
  //       '2 onions, finely chopped',
  //       '2 tomatoes, chopped',
  //       '2 cloves garlic, minced',
  //       '1 tablespoon ginger, minced',
  //       '2 green chilies, chopped',
  //       '1 teaspoon cumin seeds',
  //       '1 teaspoon coriander powder',
  //       '1 teaspoon cumin powder',
  //       '1 teaspoon turmeric powder',
  //       '1 teaspoon garam masala',
  //       'Salt to taste',
  //       '2 tablespoons vegetable oil',
  //     ],
  //     procedure: [
  //       'Heat oil in a pot and add cumin seeds.',
  //       'Add onions, garlic, ginger, and green chilies. Cook until onions are golden brown.',
  //       'Add chopped tomatoes, coriander powder, cumin powder, turmeric powder, and salt. Cook until tomatoes are soft.',
  //       'Add boiled chickpeas and a cup of water. Simmer for 15 minutes.',
  //       'Stir in garam masala and cook for another 5 minutes.',
  //     ],
  //     timetaken: '40 minutes',
  //     type: 'Main Course',
  //     rating: 4.8,
  //     category: 'Veg',
  //     poster:
  //       'https://www.eatingwell.com/thmb/Kx41aHMgb9iAY41IM5eSrQi-3O8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chickpea-curry-chhole-1x1-41ea4d53c7df4fddabd83caa5b57718e.jpg',
  //   },
  //   {
  //     title: 'Butter Chicken',
  //     ingredients: [
  //       '1 lb chicken, cut into pieces',
  //       '1 cup plain yogurt',
  //       '2 tablespoons lemon juice',
  //       '2 tablespoons butter',
  //       '1 onion, finely chopped',
  //       '2 cloves garlic, minced',
  //       '1 tablespoon ginger, minced',
  //       '1 can diced tomatoes',
  //       '1/2 cup heavy cream',
  //       '1 tablespoon garam masala',
  //       '1 teaspoon paprika',
  //       'Salt and pepper to taste',
  //       '2 tablespoons vegetable oil',
  //     ],
  //     procedure: [
  //       'Marinate chicken in yogurt, lemon juice, salt, and pepper for at least 1 hour.',
  //       'Heat oil in a skillet over medium heat. Cook onions, garlic, and ginger until soft.',
  //       'Add marinated chicken and cook until browned.',
  //       'Stir in diced tomatoes and cook for 10 minutes.',
  //       'Add butter, heavy cream, garam masala, and paprika. Cook for another 10 minutes.',
  //     ],
  //     timetaken: '50 minutes',
  //     type: 'Main Course',
  //     rating: 4.7,
  //     category: 'Non-Veg',
  //     poster:
  //       'https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Best-Instant-Pot-Butter-Chicken-Recipe.jpg',
  //   },
  //   {
  //     title: 'Aloo Gobi (Potato and Cauliflower)',
  //     ingredients: [
  //       '2 potatoes, peeled and diced',
  //       '1 head cauliflower, cut into florets',
  //       '1 onion, finely chopped',
  //       '2 cloves garlic, minced',
  //       '1 tablespoon ginger, minced',
  //       '1 tomato, chopped',
  //       '1 teaspoon cumin seeds',
  //       '1 teaspoon turmeric powder',
  //       '1 teaspoon coriander powder',
  //       '1 teaspoon garam masala',
  //       'Salt and pepper to taste',
  //       '2 tablespoons vegetable oil',
  //     ],
  //     procedure: [
  //       'Heat oil in a pan and add cumin seeds.',
  //       'Add onions, garlic, and ginger. Cook until onions are golden brown.',
  //       'Add chopped tomatoes, turmeric powder, coriander powder, and salt. Cook until tomatoes are soft.',
  //       'Add potatoes and cauliflower. Stir well and cover.',
  //       'Cook on medium heat for 15-20 minutes, stirring occasionally.',
  //       'Stir in garam masala and cook for another 5 minutes.',
  //     ],
  //     timetaken: '35 minutes',
  //     type: 'Main Course',
  //     rating: 4.5,
  //     category: 'Veg',
  //     poster:
  //       'https://www.cookclickndevour.com/wp-content/uploads/2020/10/aloo-gobi-recipe.jpg',
  //   },
  // ];
  ReciepsList: any;

  constructor() {
    fetch('https://669a42939ba098ed61fef782.mockapi.io/ReciepsList')
      .then((data) => data.json())
      .then((res) => (this.ReciepsList = res));
  }

  getrecipes() {
    console.log('adding....');
    return this.ReciepsList;
  }
  addrecipie(recipe: any) {
    //.then((res) => (this.ReciepsList = res));
    // this.ReciepsList.push(recipe);
    return fetch(`https://669a42939ba098ed61fef782.mockapi.io/ReciepsList`, {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }
  deleterecipie(recipe: any) {
    // let idx = this.ReciepsList.indexOf(recipe);
    // this.ReciepsList.splice(idx, 1);
    return fetch(
      `https://669a42939ba098ed61fef789.mockapi.io/MoviesList/${recipe.id} `,
      {
        method: 'DELETE',
      }
    ).then((res) => res.json());
  }
  getRecipeById(recipe: any) {
    return this.ReciepsList;
  }
  getRecipeByIdx(idx: any) {
    return this.ReciepsList[idx];
  }
}
