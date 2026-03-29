// [1,3,7,12,14], [5,"9",45,78] -> [1,3,5,7,"9",12,14,45,78]
// [1,3,7,12,"14"], ["13",16,17,18,19] -> [1,3,7,12,13,14,16,17,18,19]

function isInRange(v: number, l: number, h: number): boolean {
  return v >= l && v <= h;
}

function getMiddle(l: number, r: number) {
  return Math.floor((r + l) / 2);
}

function getCentralValue(nums2: number[]) {
  let i1 = Math.floor((nums2.length - 1) / 2);
  if (nums2.length % 2 == 0) {
    return (nums2[i1] + nums2[i1 + 1]) / 2;
  } else {
    return nums2[i1];
  }
}


export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length == 0) {
    return getCentralValue(nums2);
  } else if (nums2.length == 0) {
    return getCentralValue(nums1);
  }
  let [l1, l2, r1, r2] = [0, 0, nums1.length - 1, nums2.length - 1]
  while (!(l1 == r1 && l2 == r2)) {
    if (l1 == r1 && l2 + 1 == r2) {
      if (nums1[l1] > nums2[l2]) {
        l2 = r2
      } else {
        r2 = l2;
      }
    } else if (l2 == r2 && l1 + 1 == r1) {
      if (nums1[l2] > nums2[l1]) {
        l1 = r1
      } else {
        r1 = l1;
      }
    } else {
      let m1 = getMiddle(l1, r1);
      let m2 = getMiddle(l2, r2);
      if (nums1[m1] < nums2[m2]) {
        r2 = m2;
        l1 = m1
      } else {
        r1 = m1;
        l2 = m2;
      }
    }
  }
  if ((nums1.length + nums2.length) % 2 == 1) {
    return Math.max(nums1[l1], nums2[l2])
  } 
  console.log(l1, l2)
  return 0;

}
