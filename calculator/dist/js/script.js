class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.readyToReset = false;
    this.clear();
  }
  clear() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.operation = undefined;
  }

  delete() {
    // console.log(typeof this.currentOperand);
    console.log(this.currentOperand.toString().slice(0, -1));
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    // this.currentOperand.toString();
  }
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    // console.log(
    //   'before..',
    //   'prev',
    //   this.previousOperand,
    //   'current',
    //   this.currentOperand,
    //   'op',
    //   this.operation
    // );
    console.log(this.previousOperand === '');
    // previous=''  current = operation = undefined
    if (
      this.previousOperand === '' &&
      this.operation === undefined &&
      this.readyToReset === true
    ) {
      this.clear();
      this.readyToReset = false;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
    // console.log(
    //   'after..',
    //   'prev',
    //   this.previousOperand,
    //   'current',
    //   this.currentOperand,
    //   'op',
    //   this.operation
    // );
  }
  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';

    // switch(operation){
    //   case ''
    // }
  }
  compute() {
    let computation;

    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }
    this.readyToReset = true;
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';

    // console.log(
    //   'compute..',
    //   'prev',
    //   this.previousOperand,
    //   'current',
    //   this.currentOperand,
    //   'op',
    //   this.operation
    // );
  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }
}

const previousOperandTextElement = document.querySelector('.previousOperand');
const currentOperandTextElement = document.querySelector('.currentOperand');

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-op]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) =>
  button.addEventListener('click', () => {
    // console.log(button.innerText);
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
);
operationButtons.forEach((button) =>
  button.addEventListener('click', () => {
    // console.log(button.innerText);
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
);
deleteButton.addEventListener('click', (e) => {
  // console.log(e.target.innerText);
  calculator.delete();
  calculator.updateDisplay();
});
allClearButton.addEventListener('click', (e) => {
  calculator.clear();
  calculator.updateDisplay();
});
equalsButton.addEventListener('click', (e) => {
  // console.log(e.target.innerText);
  calculator.compute();
  calculator.updateDisplay();
});
