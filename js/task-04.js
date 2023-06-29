let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');

const incrementButton = document.querySelector('button[data-action="increment"]')

const valueEl = document.querySelector('#value');

decrementButton.addEventListener('click', onClickDecrementBtn);
incrementButton.addEventListener('click', onClickIncrementBtn);

function onClickDecrementBtn () {
    counterValue -=1
    valueEl.textContent = counterValue;
};

function onClickIncrementBtn () {
    counterValue +=1
    valueEl.textContent = counterValue;
}