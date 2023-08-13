from typing import List
from collections import deque


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        deq = deque()
        res = []
        l = r = 0

        while r < len(nums):
            while deq and deq[-1]["element"] < nums[r]:
                deq.pop()

            deq.append({
                "element": nums[r],
                "index": r
            })

            if deq[0]["index"] < l:
                deq.popleft()

            if r > k - 2:
                res.append(deq[0]["element"])

            r +=1
        return res






