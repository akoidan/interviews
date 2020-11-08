import type = Mocha.utils.type;

type mathOperation = '+' | '-' | '*' | '/'
type numbersAndOperations = number | mathOperation;
type reversePolishArray = numbersAndOperations[];


let symbolsArray: numbersAndOperations[] = ['+', '-', '*', "/"];


function calculateOperation(a: number, b: number, operation: mathOperation): number {
  // type arithmSymbols = '+' | '-' | '*' | '/';
  // let test: {[id: arithmSymbols]: number} = {};
  // let symb: arithmSymbols = '-';
  // test[symb] = 3 ;
  // @ts-expect-error
  let operations: {[id: mathOperation]: (a: number, b: number) => number} = {
    '+': (a : number, b: number) => a + b,
    '-': (a : number, b: number) => a - b,
    '*': (a : number, b: number) => a * b,
    '/': (a : number, b: number) => a / b,
  };
  // @ts-expect-error
  return operations[operation](a,b);
}
function calculate(input: reversePolishArray) {
  let stack: reversePolishArray = [];
  for (let el of input) {
    if (symbolsArray.indexOf(el) >= 0) {
      let b: numbersAndOperations = stack.pop()!;
      let a: numbersAndOperations = stack.pop()!;
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw Error(`Invalid reverse polish string, can't calculate "${a}"${el}"${b}"`);
      } else {
        let result: number = calculateOperation(a,b, el as mathOperation);
        stack.push(result);
      }
    } else {
      stack.push(el)
    }
  }
  if (stack.length !== 1) {
    throw Error(`Invalid reverse polish string. Stack is ${stack}. Too many numbers`);
  }
  let result = stack.pop();
  if (typeof result !== 'number') {
    throw Error(`Invalid reverse polish string. Got ${result}, but expected number.`);
  }
  return result;
}

export {calculate}


