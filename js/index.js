const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
let number = document.querySelector(".number");

let i = 0;

function count() {
    i++
    number.innerHTML = i
}
plus.addEventListener("click", count)

function minusF() {
    if (number.innerHTML == 0) return
    number.innerHTML = i - 1
    i--
}
minus.addEventListener("click", minusF)