const inputEl = document.querySelector("#validation-input");
const requiredLength = inputEl.dataset.length;

inputEl.addEventListener("blur", (event) => {
  const inputValue = event.target.value;

  if (inputValue.length >= requiredLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});