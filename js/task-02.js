const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemEl = ingredients.map(ingredient => {
const createEl = document.createElement('li')
createEl.textContent = ingredient;
createEl.classList.add('item');
return createEl;
});

const listEl = document.querySelector('#ingredients');
listEl.append(...itemEl);
