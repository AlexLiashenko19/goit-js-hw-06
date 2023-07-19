const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output")

inputEl.addEventListener("input", () => {
    const name = inputEl.value;
    if (name === "") {
      outputEl.textContent = "Anonymous";
    } else {
      outputEl.textContent = name;
    }
  });