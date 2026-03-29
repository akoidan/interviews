from collections import defaultdict
from typing import List


class Solution:
  # def longestConsecutive(self, nums: List[int]) -> int:
  #   if len(nums) == 0:
  #     return 0
  #   nums_map = {}
  #   for num in nums:
  #     if num in nums_map:
  #       continue
  #     cur_length = 1
  #     if num-1 in nums_map:
  #       cur_length += nums_map[num-1]
  #     if num + 1 in nums_map:
  #       cur_length += nums_map[num + 1]
  #
  #     if num-1 in nums_map:
  #       prev_value = nums_map[num-1]
  #       nums_map[num- prev_value] = cur_length
  #     if num + 1 in nums_map:
  #       prev_value = nums_map[num + 1]
  #       nums_map[num + prev_value] = cur_length
  #     nums_map[num] = cur_length
  #   return max(nums_map.values())


  def longestConsecutive(self, nums: List[int]) -> int:
    max_value = 0
    nums_map = defaultdict(int) # int is a lamba that returns 0
    for num in nums:
      if nums_map[num] > 0:
        continue
      cur_length = 1 + nums_map[num-1] + nums_map[num + 1]
      nums_map[num - nums_map[num - 1]] = cur_length
      nums_map[num + nums_map[num + 1]] = cur_length
      max_value = max(max_value, cur_length)
    return max_value