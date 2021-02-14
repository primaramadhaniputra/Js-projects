const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const text = document.querySelector('.text');
const button = document.getElementById('button');

button.addEventListener('click', function () {
   let hex = '#'
   for (let i = 0; i < 6; i++) {
      hex += color[randomNumber()]
   }
   text.textContent = hex
   document.body.style.backgroundColor = hex
})

function randomNumber() {
   return Math.floor(Math.random() * color.length)
}