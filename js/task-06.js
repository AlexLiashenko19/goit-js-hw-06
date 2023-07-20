const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  const inputValue = event.target.value;

  if (inputValue.length === 6) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});