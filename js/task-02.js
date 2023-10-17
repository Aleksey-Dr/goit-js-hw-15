const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {

  const item = document.createElement('li');

  item.textContent = ingredient;
  item.classList.add('item');
  
  return item;
});

listIngredients.append(...items);