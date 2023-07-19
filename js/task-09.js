function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body")
const spanCl = document.querySelector(".color")
const btnEl = document.querySelector(".change-color")

btnEl.addEventListener("click", () => {
 const bodyEl = body.style.backgroundColor = getRandomHexColor()
spanCl.textContent = bodyEl
})

