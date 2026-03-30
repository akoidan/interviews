export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let [b, a] = [nums1, nums2];
  if (b.length < a.length) {
    [b,a] = [a,b];
  }

  const total = nums1.length + nums2.length;

  if (total === 0) {
    return 0;
  }
  let al = 0;
  let ar = a.length - 1;

  function biFromAi(ai: number): number {
    return Math.max(Math.floor(total/2) - ai - 2, -1);
  }
  function getValue(arr: number[], index: number) {
    if (index < 0) {
      return -Infinity
    } else if (index > arr.length - 1) {
      return Infinity
    }
    return arr[index];
  }
  let ai = 0;

  while (al < ar) {
    ai = Math.floor((ar + al)/2);
    const bi = biFromAi(ai);
    if (getValue(b, bi) <= getValue(a, ai + 1) && getValue(a, ai) <= getValue(b, bi+1)) {
      break
    }
    if (getValue(b, bi) < getValue(a, ai+1)) {
      if (al == ar || ai +1 >= a.length) {
        ai = -1;
        break;
      } else {
        ar = ai;
      }
    } else {
      if (al == ai) {
        ai = ai+1;
        break;
      } else {
        al = ai;
      }
    }
  }

  if (total % 2 == 1) {
    return Math.min(getValue(b, biFromAi(ai)+1), getValue(a, ai+1));
  } else {
    const left = Math.max(getValue(a, ai), getValue(b, biFromAi(ai)));
    const right = Math.min(getValue(a, ai +1), getValue(b, biFromAi(ai) + 1))
    return  (left + right) / 2 ;
  }
}
