
let arr = []

let x = document.querySelectorAll('.js-color');

for (let i = 149; i < x.length; i++) {
    arr.push(x[i].style.backgroundColor)
}

console.log(arr)