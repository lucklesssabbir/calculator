let expression = '';
let result = 0;

const expressionDisplay = document.getElementById('expression');
const resultDisplay = document.getElementById('result');
const historyBtn = document.getElementById('history-btn');

const key = document.querySelector('.keys');
key.addEventListener('click', (e) => {
  const value = e.target.innerText;

  if (e.target.tagName !== 'BUTTON') return;

  switch (value) {
    case 'C':
      clearCalculator();
      break;
    case '⌫':
      backspace();
      break;
    case '=':
      calculate();
      break;
    default:
      appendValue(value);
  }
});

function appendValue(value) {
  if (expression.length >= 20) return;
  expression += value;
  updateDisplay();
}

// Safely calculate the result
function calculate() {
  try {
    // only arithmatic expression
    result = new Function('return ' + expression)();
    saveToHistory(expression + ' = ' + result);
  } catch {
    result = 'Error';
    expression = ''; // Reset the expression on error
  }
  updateDisplay();
}

// Clear the calculator
function clearCalculator() {
  expression = '';
  result = 0;
  updateDisplay();
}

// Backspace functionality
function backspace() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

// Update the calculator display
function updateDisplay() {
  expressionDisplay.innerText = expression || '0';
  resultDisplay.innerText = result.toString().slice(0, 15) || '0'; // Limit display length
}

function saveToHistory(entry) {
  let history = JSON.parse(localStorage.getItem('history')) || [];
  history.push(entry);
  localStorage.setItem('history', JSON.stringify(history));
}

historyBtn.addEventListener('click', () => {
  window.location.href = 'history.html';
});
