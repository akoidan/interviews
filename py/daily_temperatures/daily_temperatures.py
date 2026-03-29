from typing import List


class Solution:

  def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
    #  [38,37,36,35,39]
    #  [4 ,3 ,2 ,1 ,0]
    # 30 38
    stack = []
    result = [0] * len(temperatures)
    for i, temp in enumerate(temperatures):
      while stack and temp > stack[-1][1]:
        [pos, _] = stack.pop()
        result[pos] = i - pos
      stack.append((i, temp))

    return result

  # def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
  #   #  [38,37,36,35,39]
  #   #  [4 ,3 ,2 ,1 ,0]
  #   # 30 38
  #   stack = []
  #   result = [0] * len(temperatures)
  #   for i, temp in enumerate(temperatures):
  #     while stack and temp > stack[-1]['number']:
  #       number = stack.pop()
  #       result[number['pos']] = number['before']
  #       if stack:
  #         stack[-1]['before'] += number['before']
  #     stack.append({
  #       'number': temp,
  #       'pos': i,
  #       'before': 1,
  #     })
  #
  # return result
