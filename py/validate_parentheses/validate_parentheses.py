class Solution:
  opening = ['{', '[', '(']
  corresponding = {
    '}': '{',
    ']': '[',
    ')': '(',
  }

  def isValid(self, s: str) -> bool:
    stack = []
    for c in s:
      if c in self.opening:
        stack.append(c)
      else:
        if not stack:
          return False
        if stack.pop() != self.corresponding[c]:
          return False
    return not stack
