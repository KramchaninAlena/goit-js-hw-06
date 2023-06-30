function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color')
const bodyEl = document.querySelector('body')
const textEl = document.querySelector('.color')

buttonEl.addEventListener('click',onButtonColor);

function onButtonColor () {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = bodyEl.style.backgroundColor;
}


