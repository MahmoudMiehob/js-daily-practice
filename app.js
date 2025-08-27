//color flipper

const display = document.getElementById('color-display');
const btn = document.getElementById('color-btn');
const colors = ['#f94144', '#f3722c', '#f9c74f', '#90be6d', '#577590'];


btn.addEventListener('click', ()=>{
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    display.style.backgroundColor = randomColor;
});