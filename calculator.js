//select buttons
const output = document.querySelector('.output');
const operationElement = document.querySelector('.operation .value');
const resultElement = document.querySelector('.result .value');
const inputElement = document.querySelector('.input');
//some variables
const OPERATOR = ['+', '-', '*', '/'];
const POWER = 'POWER(',
  FACRORIAL = 'FACTORIAL';

const data = {
  operation: [],
  formula: [],
};

const Buttons = [
  {
    name: 'rad',
    symbol: 'Rad',
    formula: false,
    type: 'key',
  },
  {
    name: 'deg',
    symbol: 'Deg',
    formula: false,
    type: 'key',
  },
  {
    name: 'square-root',
    symbol: '√',
    formula: 'Math.sqrt',
    type: 'math_function',
  },
  {
    name: 'square',
    symbol: 'x²',
    formula: POWER,
    type: 'math_function',
  },
  {
    name: 'open-parenthesis',
    symbol: '(',
    formula: '(',
    type: 'number',
  },
  {
    name: 'close-parenthesis',
    symbol: ')',
    formula: ')',
    type: 'number',
  },
  {
    name: 'clear',
    symbol: 'C',
    formula: false,
    type: 'key',
  },
  {
    name: 'delete',
    symbol: '⌫',
    formula: false,
    type: 'key',
  },
  {
    name: 'pi',
    symbol: 'π',
    formula: 'Math.PI',
    type: 'number',
  },
  {
    name: 'cos',
    symbol: 'cos',
    formula: 'trigo(Math.cos,',
    type: 'trigo_function',
  },
  {
    name: 'sin',
    symbol: 'sin',
    formula: 'trigo(Math.sin,',
    type: 'trigo_function',
  },
  {
    name: 'tan',
    symbol: 'tan',
    formula: 'trigo(Math.tan,',
    type: 'trigo_function',
  },
  {
    name: '7',
    symbol: 7,
    formula: 7,
    type: 'number',
  },
  {
    name: '8',
    symbol: 8,
    formula: 8,
    type: 'number',
  },
  {
    name: '9',
    symbol: 9,
    formula: 9,
    type: 'number',
  },
  {
    name: 'division',
    symbol: '÷',
    formula: '/',
    type: 'operator',
  },
  {
    name: 'e',
    symbol: 'e',
    formula: 'Math.E',
    type: 'number',
  },
  {
    name: 'acos',
    symbol: 'acos',
    formula: 'inv_trigo(Math.acos,',
    type: 'trigo_function',
  },
  {
    name: 'asin',
    symbol: 'asin',
    formula: 'inv_trigo(Math.asin,',
    type: 'trigo_function',
  },
  {
    name: 'atan',
    symbol: 'atan',
    formula: 'inv_trigo(Math.atan,',
    type: 'trigo_function',
  },
  {
    name: '4',
    symbol: 4,
    formula: 4,
    type: 'number',
  },
  {
    name: '5',
    symbol: 5,
    formula: 5,
    type: 'number',
  },
  {
    name: '6',
    symbol: 6,
    formula: 6,
    type: 'number',
  },
  {
    name: 'multiplication',
    symbol: '×',
    formula: '*',
    type: 'operator',
  },
  {
    name: 'factorial',
    symbol: '×!',
    formula: 'FACTORIAL',
    type: 'math_function',
  },
  {
    name: 'exp',
    symbol: 'exp',
    formula: 'Math.exp',
    type: 'math_function',
  },
  {
    name: 'ln',
    symbol: 'ln',
    formula: 'Math.log',
    type: 'math_function',
  },
  {
    name: 'log',
    symbol: 'log',
    formula: 'Math.log10',
    type: 'math_function',
  },
  {
    name: '1',
    symbol: 1,
    formula: 1,
    type: 'number',
  },
  {
    name: '2',
    symbol: 2,
    formula: 2,
    type: 'number',
  },
  {
    name: '3',
    symbol: 3,
    formula: 3,
    type: 'number',
  },
  {
    name: 'subtraction',
    symbol: '–',
    formula: '-',
    type: 'operator',
  },
  {
    name: 'power',
    symbol: 'x<span>y</span>',
    formula: POWER,
    type: 'math_function',
  },
  {
    name: 'ANS',
    symbol: 'ANS',
    formula: 'ans',
    type: 'number',
  },
  {
    name: 'percent',
    symbol: '%',
    formula: '/100',
    type: 'number',
  },
  {
    name: 'comma',
    symbol: '.',
    formula: '.',
    type: 'number',
  },
  {
    name: '0',
    symbol: 0,
    formula: 0,
    type: 'number',
  },
  {
    name: 'calculate',
    symbol: '=',
    formula: '=',
    type: 'calculate',
  },
  {
    name: 'addition',
    symbol: '+',
    formula: '+',
    type: 'operator',
  },
];
//creating button

function calculatorButton() {
  const buttonsPerRow = 8;
  let addedButtons = 0;
  Buttons.forEach((button) => {
    if (addedButtons % buttonsPerRow == 0) {
      inputElement.innerHTML += `<div class="row"></div>`;
    }
    const row = document.querySelector('.row:last-child');
    row.innerHTML += `<button id=${button.name}>${button.symbol} </button>`;
    addedButtons++;
  });
}

calculatorButton();

//onclick button

inputElement.addEventListener('click', (event) => calculate(event));

function calculate(event) {
  Buttons.forEach((button) => {
    if (button.name == event.target.id) {
      if (button.type == 'number') {
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
      } else if (button.type == 'key') {
        console.log(button.name);
      } else if (button.type == 'calculate') {
        const result = data.formula.join('');
        updateOurputResult(eval(result));
      } else if (button.type == 'operator') {
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
      }
    }
  });

  updateOutputOperation(data.operation.join(''));
}

//output functions

function updateOutputOperation(operation) {
  operationElement.innerHTML = operation;
}

function updateOurputResult(result) {
  resultElement.innerHTML = result;
}

// GAMMA FUNCTINON
function gamma(n) {
  // accurate to about 15 decimal places
  //some magic constants
  var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
    p = [
      0.99999999999980993, 676.5203681218851, -1259.1392167224028,
      771.32342877765313, -176.61502916214059, 12.507343278686905,
      -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
    ];
  if (n < 0.5) {
    return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
  } else {
    n--;
    var x = p[0];
    for (var i = 1; i < g + 2; i++) {
      x += p[i] / (n + i);
    }
    var t = n + g + 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
  }
}
