package org.example

data class WindowItem(
    val index: Int,
    val value: Int
)

class Solution {
    fun maxSlidingWindow(nums: IntArray, k: Int): IntArray {
        if (k < 1) {
            throw IllegalArgumentException("Illegal sliding window size")
        }
        if (nums.size < k) {
            throw IllegalArgumentException("Array should be greater sliding window")
        }
        if (k == 1) {
            return nums
        }

        val result = ArrayList<Int>(nums.size - k + 1)
        val deq = ArrayDeque<WindowItem>()
        for (i in 1 until k - 1) {
            while (deq.isNotEmpty() && deq.last().value <= nums[i]) {
                deq.removeLast()
            }
            deq.add(WindowItem(i, nums[i]))
        }

        for (i in k - 1 until nums.size) {
            if (deq.first().index < i - k + 1) {
                deq.removeFirst()
            }
            while (deq.isNotEmpty() && deq.last().value <= nums[i]) {
                deq.removeLast()
            }
            deq.add(WindowItem(i, nums[i]))
            result.add(deq[0].value)
        }

        return result.toIntArray()
    }
}
