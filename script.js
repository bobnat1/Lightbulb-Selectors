// Write your code here
const lightBulb1 = document.querySelector("#lightbulb1");
const lightBulb2 = document.querySelector("#lightbulb2");
const lightBulb3 = document.querySelector("#lightbulb3");

let subtitle = document.querySelector(".subtitle")

let count = 0;

lightBulb1.addEventListener("click", x => {
    lightBulb1.classList.toggle("active");
    count++;
    if (count === 1)
        subtitle.innerHTML = `You've clicked the lights ${count} time`;
    else
        subtitle.innerHTML = `You've clicked the lights ${count} times`;
})

lightBulb2.addEventListener("click", x => {
    lightBulb2.classList.toggle("active");
    count++;
    if (count === 1)
    subtitle.innerHTML = `You've clicked the lights ${count} time`;
    else
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
})

lightBulb3.addEventListener("click", x => {
    lightBulb3.classList.toggle("active");
    count++;
    if (count === 1)
    subtitle.innerHTML = `You've clicked the lights ${count} time`;
    else
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
})