export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // TODO remove 1 from indexes
  let num1Index = -1;
  let num2Index = -1;
  let medianStartsFrom = Math.floor((nums1.length + nums2.length - 1) / 2)

  while ((num1Index + num2Index) < medianStartsFrom - 2) {
    if (num1Index < nums1.length - 1 && nums1[num1Index + 1] < nums2[num2Index + 1]) {
      num1Index++;
    } else {
      num2Index++;
    }
  }

  // [1,3,7,9], [2, 4, 5] -> 1,2,3,   4    ,5,7,9
  if (nums1[num1Index + 1] > nums2[num2Index + 1]) {
    return nums2[num2Index +1]
  } else {
    return nums1[num1Index +1]
  }
}
