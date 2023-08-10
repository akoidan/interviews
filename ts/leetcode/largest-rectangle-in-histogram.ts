export function largestRectangleArea(heights: number[]): number {
  let stack: {height: number; index: number}[] = []
  let largestArea = 0;
  for (let [index, height] of heights.entries()) {
    while (stack.length && height < stack[stack.length - 1].height) {
      let topStack = stack.pop()!;

      let leftBorder: number;
      if (stack.length == 0) {
        leftBorder = 0;
      } else {
        leftBorder = stack[stack.length - 1].index! + 1;
      }

      let stackSquare = topStack.height * (index - leftBorder);
      if (stackSquare > largestArea) {
        largestArea = stackSquare;
      }
    }
    stack.push({height, index});
  }
  while (stack.length) {
    let topStack = stack.pop()!;
    let rightBorder = heights.length;
    let leftBorder: number;
    if (stack.length == 0) {
      leftBorder = 0;
    } else {
      leftBorder = stack[stack.length - 1].index! + 1;
    }
    let stackSquare = topStack.height * (rightBorder - leftBorder);
    if (stackSquare > largestArea) {
      largestArea = stackSquare;
    }
  }
  return largestArea;
}

