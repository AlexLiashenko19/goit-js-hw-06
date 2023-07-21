const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngradients = document.querySelector("#ingredients")

let newArr = []

ingredients.forEach(ingredient => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.className = "item";
  newArr.push(liElement);
});

listIngradients.append(...newArr);

