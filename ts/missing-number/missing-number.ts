export  function missingNumber(nums: number[]): number {
  let result = 0
  let length = nums.length + 1;
  if (nums.length % 2 == 0) { // should be even, include missing number, if not make it even
    result += (nums.length + 1) // add odd number awlways
    length ++;
  } // result = 3
  result -= length / 2;
  nums.forEach(n => {
    if (n % 2 === 0) {
      result -= n;
    } else {
      result += n;
    }
  })
  return Math.abs(result)

}
