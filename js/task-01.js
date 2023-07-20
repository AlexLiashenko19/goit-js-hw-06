const categoriesEl = document.querySelector("#categories");
const itemEl = categories.querySelectorAll(".item");
const categoryCount = itemEl.length;


console.log(`Number of categories: ${categoryCount}`);

itemEl.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryElementsCount = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementsCount}`);
});