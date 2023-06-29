const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInpunBlur);
const inputLength = Number(inputEl.dataset.length)

function onInpunBlur (event) {
if(event.currentTarget.value.length === inputLength){
    inputEl.classList.add('valid')
    inputEl.classList.remove('invalid')
}else {
    inputEl.classList.add('invalid')
};
};