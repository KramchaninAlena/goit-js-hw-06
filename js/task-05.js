const inputName = document.querySelector('#name-input');

const nameLabel = document.querySelector('#name-output');

inputName.addEventListener('input', onInputChange);

function onInputChange (event) {
    nameLabel.textContent = event.currentTarget.value;
    if (!nameLabel.textContent.length){
        nameLabel.textContent = 'Anonymous'
    };
};