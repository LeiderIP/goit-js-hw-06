function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.getElementById('controls');
const boxesDiv = document.getElementById('boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = parseInt(document.querySelector('input[type="number"]').value);

  let boxesHTML = '';

  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    const randomColor = getRandomHexColor();
    boxesHTML += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${randomColor};"></div>`;
  }

  boxesDiv.innerHTML = boxesHTML;
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}
