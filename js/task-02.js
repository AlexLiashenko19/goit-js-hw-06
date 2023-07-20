const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngradients = document.querySelector("#ingredients")

ingredients.forEach(ingredient => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.className = "item";
  listIngradients.append(liElement);
  console.log(liElement);
});

