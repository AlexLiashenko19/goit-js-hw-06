let counterValue = 0;

const btn = document.querySelector("#counter button[data-action='decrement']")
btn.addEventListener('click', onClick)

function onClick(evt) {
    counterValue-=1;
    document.querySelector("#value").textContent = counterValue;
}

const scndBtn = document.querySelector("#counter button[data-action='increment']")
scndBtn.addEventListener('click', outClick)

function outClick(evt) {
    counterValue+=1;
    document.querySelector("#value").textContent = counterValue;
}