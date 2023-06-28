
/*
* @param {number} open -  how many opened brackets remaining
* @param {number} closed - how many opened brackets remaining@
* @return {string[]} - combination of all possible brackets including current brackets conditions
* */
function generateParenthesisNumber(open: number, closed: number): string[] {
  if (open == 0 && closed == 0) {
    return [""] // ( and ) will be appended on top, so we need empty string for n(1) to map
  }
  let result = []

  // we can put an open bracket any time as long as we haven't used them all
  if (open > 0) {
    result.push(...generateParenthesisNumber(open - 1, closed).map(e => "(" + e))
  }
  // We can put a closed bracket only if we have a matching open bracket on the left
  if (closed > 0 && open < closed) {
    result.push(...generateParenthesisNumber(open, closed - 1).map(e => ")" + e))
  }
  return result;
}


export function generateParenthesis(n: number): string[] {
  return generateParenthesisNumber(n, n);
}
