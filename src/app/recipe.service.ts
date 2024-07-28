import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  ReciepsList = [
    {
      title: 'Vegetable Stir-Fry',
      ingredients: [
        '2 tablespoons vegetable oil',
        '1 bell pepper, sliced',
        '1 cup broccoli florets',
        '1 cup snap peas',
        '2 cloves garlic, minced',
        '2 tablespoons soy sauce',
        '1 tablespoon hoisin sauce',
        '1 teaspoon sesame seeds',
      ],
      procedure: [
        'Heat the vegetable oil in a large skillet over medium-high heat.',
        'Add the bell pepper, broccoli, and snap peas. Stir-fry for about 5 minutes.',
        'Add the minced garlic and cook for an additional minute.',
        'Stir in the soy sauce and hoisin sauce. Cook for another 2 minutes.',
        'Sprinkle with sesame seeds before serving.',
      ],
      timetaken: '15 minutes',
      type: 'Main Course',
      rating: 4.5,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5igQTy4xBK0yhNXVAJU_1NAOsKAdKcqB5dw&s',
    },
    {
      title: 'Chickpea Salad',
      ingredients: [
        '1 can chickpeas, drained and rinsed',
        '1 cucumber, diced',
        '1 cup cherry tomatoes, halved',
        '1/4 red onion, finely chopped',
        '1/4 cup chopped parsley',
        '3 tablespoons olive oil',
        '2 tablespoons lemon juice',
        'Salt and pepper to taste',
      ],
      procedure: [
        'In a large bowl, combine the chickpeas, cucumber, cherry tomatoes, red onion, and parsley.',
        'In a small bowl, whisk together the olive oil and lemon juice.',
        'Pour the dressing over the salad and toss to combine.',
        'Season with salt and pepper to taste.',
      ],
      timetaken: '10 minutes',
      type: 'Salad',
      rating: 4.8,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdtdbrByR_82n-ELyELB1kHGyB4k7NVrcow&s',
    },
    {
      title: 'Vegetarian Chili',
      ingredients: [
        '2 tablespoons olive oil',
        '1 onion, chopped',
        '2 cloves garlic, minced',
        '1 bell pepper, chopped',
        '2 cans diced tomatoes',
        '1 can kidney beans, drained and rinsed',
        '1 can black beans, drained and rinsed',
        '1 cup corn kernels',
        '2 tablespoons chili powder',
        '1 teaspoon cumin',
        'Salt and pepper to taste',
      ],
      procedure: [
        'Heat the olive oil in a large pot over medium heat.',
        'Add the onion and garlic, and cook until the onion is translucent.',
        'Add the bell pepper and cook for another 5 minutes.',
        'Stir in the diced tomatoes, kidney beans, black beans, corn, chili powder, and cumin.',
        'Simmer for 20 minutes, stirring occasionally.',
        'Season with salt and pepper to taste before serving.',
      ],
      timetaken: '30 minutes',
      type: 'Main Course',
      rating: 4.7,
      poster:
        'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Vegetarian-chilli-206c469.jpg?resize=768,574',
    },

    {
      title: 'Spinach and Feta Stuffed Mushrooms',
      ingredients: [
        '12 large mushrooms, stems removed',
        '1 tablespoon olive oil',
        '2 cups fresh spinach, chopped',
        '1/2 cup crumbled feta cheese',
        '1/4 cup breadcrumbs',
        '1 clove garlic, minced',
        'Salt and pepper to taste',
      ],
      procedure: [
        'Preheat the oven to 375°F (190°C).',
        'Heat the olive oil in a skillet over medium heat. Add the garlic and cook until fragrant.',
        'Add the spinach and cook until wilted. Remove from heat and stir in the feta cheese.',
        'Stuff each mushroom cap with the spinach and feta mixture.',
        'Sprinkle the breadcrumbs over the stuffed mushrooms.',
        'Place the mushrooms on a baking sheet and bake for 20 minutes, or until the mushrooms are tender and the topping is golden brown.',
      ],
      timetaken: '25 minutes',
      type: 'Appetizer',
      rating: 4.6,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4V5FV5Z9rWGY2s-VXw9VIbr3CPtVF4aLaA&s',
    },
    {
      title: 'Lentil Soup',
      ingredients: [
        '1 tablespoon olive oil',
        '1 onion, diced',
        '2 carrots, diced',
        '2 celery stalks, diced',
        '3 cloves garlic, minced',
        '1 cup dried lentils',
        '1 can diced tomatoes',
        '4 cups vegetable broth',
        '1 teaspoon thyme',
        '1 bay leaf',
        'Salt and pepper to taste',
      ],
      procedure: [
        'Heat the olive oil in a large pot over medium heat.',
        'Add the onion, carrots, and celery. Cook until softened, about 5 minutes.',
        'Add the garlic and cook for another minute.',
        'Stir in the lentils, diced tomatoes, vegetable broth, thyme, and bay leaf.',
        'Bring to a boil, then reduce heat and simmer for 25-30 minutes, or until lentils are tender.',
        'Remove the bay leaf and season with salt and pepper before serving.',
      ],
      timetaken: '40 minutes',
      type: 'Soup',
      rating: 4.4,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTwiwE3eGMsi3i-KSa2hzdolSWCEmSWGAg6w&s',
    },
    {
      title: 'Stuffed Bell Peppers',
      ingredients: [
        '4 large bell peppers',
        '1 cup cooked quinoa',
        '1 can black beans, drained and rinsed',
        '1 cup corn kernels',
        '1 cup diced tomatoes',
        '1/2 cup shredded cheddar cheese',
        '1 teaspoon cumin',
        '1/2 teaspoon paprika',
        'Salt and pepper to taste',
      ],
      procedure: [
        'Preheat the oven to 375°F (190°C).',
        'Cut the tops off the bell peppers and remove seeds and membranes.',
        'In a bowl, combine the quinoa, black beans, corn, diced tomatoes, cheddar cheese, cumin, paprika, salt, and pepper.',
        'Stuff each bell pepper with the mixture and place them in a baking dish.',
        'Cover with foil and bake for 30 minutes.',
        'Remove the foil and bake for an additional 10 minutes, or until the peppers are tender.',
      ],
      timetaken: '45 minutes',
      type: 'Main Course',
      rating: 4.6,
      poster:
        'https://www.allrecipes.com/thmb/eBsB2933MCuNVCim4O-AyCR97YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79805-StuffedPeppersWithturkeyAndVegtables-MFS-2x3-0048-444ecb49b0184daab29e5326e4330af3.jpg',
    },
    {
      title: 'Sweet Potato and Black Bean Tacos',
      ingredients: [
        '2 tablespoons olive oil',
        '2 large sweet potatoes, peeled and diced',
        '1 can black beans, drained and rinsed',
        '1 teaspoon chili powder',
        '1/2 teaspoon cumin',
        'Salt and pepper to taste',
        'Taco shells or tortillas',
        'Your choice of toppings (e.g., avocado, salsa, cilantro)',
      ],
      procedure: [
        'Preheat the oven to 400°F (200°C).',
        'Toss the sweet potato cubes with olive oil, chili powder, cumin, salt, and pepper.',
        'Spread the sweet potatoes on a baking sheet and roast for 25-30 minutes, or until tender.',
        'In a bowl, mix the roasted sweet potatoes with the black beans.',
        'Serve in taco shells or tortillas with your choice of toppings.',
      ],
      timetaken: '35 minutes',
      type: 'Main Course',
      rating: 4.7,
      poster:
        'https://joyfoodsunshine.com/wp-content/uploads/2018/01/vegetarian-black-bean-sweet-potato-tacos-13.jpg',
    },
    {
      title: 'Cauliflower Curry',
      ingredients: [
        '2 tablespoons vegetable oil',
        '1 onion, chopped',
        '2 cloves garlic, minced',
        '1 tablespoon ginger, minced',
        '1 head cauliflower, cut into florets',
        '1 can coconut milk',
        '2 tablespoons curry powder',
        '1 teaspoon turmeric',
        '1/2 teaspoon cumin',
        'Salt and pepper to taste',
        'Chopped cilantro for garnish',
      ],
      procedure: [
        'Heat the vegetable oil in a large skillet over medium heat.',
        'Add the onion, garlic, and ginger. Cook until the onion is translucent.',
        'Add the cauliflower florets and cook for another 5 minutes.',
        'Stir in the coconut milk, curry powder, turmeric, and cumin.',
        'Simmer for 20 minutes, or until the cauliflower is tender.',
        'Season with salt and pepper and garnish with chopped cilantro before serving.',
      ],
      timetaken: '30 minutes',
      type: 'Main Course',
      rating: 4.5,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_C5TDMnJS-U2NFqJFkXV-2lf1kP0JpkguA&s',
    },
    {
      title: 'Chicken Alfredo',
      ingredients: [
        '2 tablespoons olive oil',
        '2 boneless, skinless chicken breasts',
        'Salt and pepper to taste',
        '2 cloves garlic, minced',
        '1 cup heavy cream',
        '1 cup grated Parmesan cheese',
        '1 cup chicken broth',
        '8 oz fettuccine pasta',
        '2 tablespoons chopped parsley for garnish',
      ],
      procedure: [
        'Cook the fettuccine according to package instructions. Drain and set aside.',
        'Heat olive oil in a large skillet over medium heat. Season chicken breasts with salt and pepper.',
        'Cook chicken in the skillet for 6-7 minutes per side, or until fully cooked. Remove from skillet and slice.',
        'In the same skillet, add garlic and cook until fragrant.',
        'Add heavy cream and chicken broth. Bring to a simmer and stir in Parmesan cheese until the sauce is smooth.',
        'Add the cooked fettuccine to the sauce and toss to coat.',
        'Top with sliced chicken and garnish with chopped parsley before serving.',
      ],
      timetaken: '30 minutes',
      type: 'Non-Veg',
      rating: 4.6,
      poster:
        'https://carlsbadcravings.com/wp-content/uploads/2022/04/chicken-fettuccine-alfredo-6a.jpg',
    },
    {
      title: 'Beef Tacos',
      ingredients: [
        '1 lb ground beef',
        '1 tablespoon olive oil',
        '1 onion, chopped',
        '2 cloves garlic, minced',
        '1 packet taco seasoning',
        '1/2 cup water',
        'Taco shells or tortillas',
        'Shredded lettuce',
        'Diced tomatoes',
        'Shredded cheddar cheese',
        'Sour cream',
      ],
      procedure: [
        'Heat olive oil in a skillet over medium heat. Add onion and cook until softened.',
        'Add garlic and cook for an additional minute.',
        'Add ground beef and cook until browned. Drain excess fat.',
        'Stir in taco seasoning and water. Simmer for 5-7 minutes, or until thickened.',
        'Serve the beef mixture in taco shells or tortillas with your choice of toppings.',
      ],
      timetaken: '20 minutes',
      type: 'Non-Veg',
      rating: 4.7,
      poster:
        'https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2023/08/Shredded-Beef-Tacos-19.jpg',
    },
    {
      title: 'Garlic Butter Shrimp',
      ingredients: [
        '1 lb large shrimp, peeled and deveined',
        '2 tablespoons butter',
        '4 cloves garlic, minced',
        '1/4 teaspoon red pepper flakes',
        '1/4 cup chopped parsley',
        'Salt and pepper to taste',
        'Lemon wedges for serving',
      ],
      procedure: [
        'Melt butter in a large skillet over medium heat.',
        'Add garlic and red pepper flakes. Cook until garlic is fragrant.',
        'Add shrimp and cook for 2-3 minutes per side, or until pink and opaque.',
        'Season with salt and pepper and stir in chopped parsley.',
        'Serve with lemon wedges.',
      ],
      timetaken: '15 minutes',
      type: 'Non-Veg',
      rating: 4.8,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwtg76-NSXo42bZWry0uc-K2qvg9-y7JTDjQ&s',
    },
    {
      title: 'Honey Mustard Glazed Salmon',
      ingredients: [
        '4 salmon fillets',
        '2 tablespoons olive oil',
        '1/4 cup honey',
        '1/4 cup Dijon mustard',
        '2 tablespoons soy sauce',
        '1 tablespoon lemon juice',
        'Salt and pepper to taste',
      ],
      procedure: [
        'Preheat the oven to 400°F (200°C).',
        'In a bowl, whisk together honey, Dijon mustard, soy sauce, and lemon juice.',
        'Place salmon fillets on a baking sheet and brush with olive oil. Season with salt and pepper.',
        'Spread the honey mustard glaze over the salmon fillets.',
        'Bake for 12-15 minutes, or until the salmon flakes easily with a fork.',
      ],
      timetaken: '20 minutes',
      type: 'Non-Veg',
      rating: 4.7,
      poster:
        'https://www.halfbakedharvest.com/wp-content/uploads/2023/01/Sheet-Pan-Honey-Mustard-Salmon-with-Caesar-Roasted-Potatoes-5.jpg',
    },
    {
      title: 'Chicken Caesar Salad',
      ingredients: [
        '2 boneless, skinless chicken breasts',
        '1 tablespoon olive oil',
        'Salt and pepper to taste',
        '4 cups romaine lettuce, chopped',
        '1/2 cup Caesar dressing',
        '1/4 cup grated Parmesan cheese',
        '1 cup croutons',
      ],
      procedure: [
        'Season chicken breasts with salt and pepper. Heat olive oil in a skillet over medium heat.',
        'Cook chicken for 6-7 minutes per side, or until fully cooked. Slice into strips.',
        'In a large bowl, toss romaine lettuce with Caesar dressing.',
        'Top with sliced chicken, Parmesan cheese, and croutons before serving.',
      ],
      timetaken: '20 minutes',
      type: 'Salad',
      rating: 4.6,
      poster:
        'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/Buffalo-Ranch-Pretzel-Chicken-Caesar-Salad-1.jpg',
    },
    {
      title: 'Pork Schnitzel',
      ingredients: [
        '4 pork chops, pounded thin',
        '1 cup flour',
        '2 large eggs, beaten',
        '1 cup breadcrumbs',
        '1/2 cup grated Parmesan cheese',
        '1/4 cup vegetable oil',
        'Lemon wedges for serving',
        'Salt and pepper to taste',
      ],
      procedure: [
        'Preheat the oven to 375°F (190°C).',
        'Set up a breading station: place flour in one dish, beaten eggs in another, and a mixture of breadcrumbs and Parmesan cheese in a third.',
        'Dredge each pork chop in flour, dip in eggs, and coat with breadcrumb mixture.',
        'Heat vegetable oil in a large skillet over medium heat.',
        'Cook pork chops for 3-4 minutes per side, or until golden brown and cooked through.',
        'Transfer to a baking sheet and bake for an additional 10 minutes if needed.',
        'Serve with lemon wedges.',
      ],
      timetaken: '40 minutes',
      type: 'Main Course',
      rating: 4.5,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0k7OateHdr_JPhwuEvxrs5uIrMpzeHddkbw&s',
    },
  ];

  constructor() {}

  getrecipes() {
    console.log('adding....');
    return this.ReciepsList;
  }
  addrecipie(recipe: any) {
    this.ReciepsList.push(recipe);
  }
  deleterecipie(recipe: any) {
    let idx = this.ReciepsList.indexOf(recipe);
    this.ReciepsList.splice(idx, 1);
  }
}
