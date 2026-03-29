/*
 Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

 The overall run time complexity should be O(log (m+n)).

 Example 1:
 Input: nums1 = [1,3], nums2 = [2]
 Output: 2.00000
 Explanation: merged array = [1,2,3] and median is 2.

 Example 2:
 Input: nums1 = [1,2], nums2 = [3,4]
 Output: 2.50000
 Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


 Constraints:

 nums1.length == m
 nums2.length == n
 0 <= m <= 1000
 0 <= n <= 1000
 1 <= m + n <= 2000
 -10^6 <= nums1[i], nums2[i] <= 10^6

 */

class TwoArrayIterator {
  i1: number = 0;
  i2: number = 0;

  constructor(private nums1: number[], private nums2: number[]) {
  }

  getNext(): number {
    let c;
    if (this.i2 >= this.nums2.length) {
      c = this.nums1[this.i1];
      this.i1++
    } else if (this.i1 >= this.nums1.length) {
      c = this.nums2[this.i2];
      this.i2++
    } else if (this.nums1[this.i1] < this.nums2[this.i2]) {
      c = this.nums1[this.i1];
      this.i1++
    } else {
      c = this.nums2[this.i2];
      this.i2++
    }
    return c;
  }

  get currentIndex() {
    return this.i1 + this.i2;
  }
}


export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let iterator = new TwoArrayIterator(nums1, nums2)
  let medianStartsFrom = Math.floor((nums1.length + nums2.length - 1) / 2)
  while (iterator.currentIndex < medianStartsFrom) {
    iterator.getNext()
  }
  if ((nums2.length + nums1.length ) % 2 == 1) {
    return iterator.getNext();
  } else {
    return (iterator.getNext() + iterator.getNext()) / 2;
  }
}
