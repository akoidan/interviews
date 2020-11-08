type MathOperation = '+' | '-' | '*' | '/'
type NumberAndOperation = number | MathOperation;
type ReversePolishArray = NumberAndOperation[];

let symbolsArray: NumberAndOperation[] = ['+', '-', '*', "/"];

function calculateOperation(a: number, b: number, operation: MathOperation): number {
  let operations: Record<MathOperation, (a: number, b: number) => number> = {
    '+': (a : number, b: number) => a + b,
    '-': (a : number, b: number) => a - b,
    '*': (a : number, b: number) => a * b,
    '/': (a : number, b: number) => a / b,
  };
  return operations[operation](a,b);
}

function calculate(input: ReversePolishArray) {
  let stack: ReversePolishArray = [];
  for (let el of input) {
    if (symbolsArray.indexOf(el) >= 0) {
      let b: NumberAndOperation = stack.pop()!;
      let a: NumberAndOperation = stack.pop()!;
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw Error(`Invalid reverse polish string, can't calculate "${a}"${el}"${b}"`);
      } else {
        let result: number = calculateOperation(a,b, el as MathOperation);
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


