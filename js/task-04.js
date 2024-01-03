const decrementBtn = document.querySelector('[data-action="decrement"');
const incrementBtn = document.querySelector('[data-action="increment"');
const counterValueSpan = document.getElementById('value');

let counterValue = 0;

const updateCounterValue = () => {
  counterValueSpan.textContent = counterValue;
};

const handleIncrement = () => {
  counterValue++;
  updateCounterValue();
};

const handleDecrement = () => {
  counterValue--;
  updateCounterValue();
};

decrementBtn.addEventListener('click', handleDecrement);
incrementBtn.addEventListener('click', handleIncrement);
