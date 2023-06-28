export function dailyTemperatures(temperatures: number[]): number[] {
  let res: number[] = new Array(temperatures.length).fill(0);
  let decreasingStack: {index: number; value: number}[] = [];
  for (let i = 0; i < temperatures.length; i++) {
    let c = temperatures[i];
    while (decreasingStack.length > 0) {
      let topStack = decreasingStack[decreasingStack.length-1];
      if (topStack.value < c) {
        res[topStack.index] =  i - topStack.index
        decreasingStack.pop()
      } else {
        break
      }
    }
    decreasingStack.push({index: i, value: c})
  }
  return  res;
}
