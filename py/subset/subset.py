from typing import List


class Solution:
  def subsets(self, nums: List[int]) -> List[List[int]]:
    if not nums:
      return []
    if len(nums) == 1:
      return [[], nums]
    wo_first: List[List[int]] = self.subsets(nums[1:])
    with_first = [el + [nums[0]] for el in wo_first]
    return wo_first + with_first
