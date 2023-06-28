/*
https://leetcode.com/problems/valid-parentheses/description/
20. Valid Parentheses
Easy
20.5K
1.3K
Companies
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.*/

function isValid(s: string): boolean {
  let stack: string[] = []
  let validMap: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  }
  for (let c of s) {
    let opposite: string = validMap[c];
    if (opposite) {
      if (stack.pop() != opposite) {
        return false
      }
    } else {
      stack.push(c)
    }
  }
  return stack.length === 0;
}
