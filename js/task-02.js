const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach(ingredient => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.className = "item";
  document.querySelector("#ingredients").appendChild(liElement);
});

