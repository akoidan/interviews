function getArray() {
  let b = []
  for (let i = 0; i < 100_000_000; i++) {
    b.push(Math.floor(Math.random() * 1000_000_000))
  }
  return b;
}


function twoSum(nums, target) {
  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    let lookFor = target - nums[i];
    if (m.has(lookFor)) {
      return [m.get(lookFor), i];
    }
    m.set(nums[i], i);
  }
  return [];
}

console.log(performance.now())
const array = getArray();
console.log(performance.now())
twoSum(array, 1223421212312301023123423)
console.log(performance.now())
