/*
 https://leetcode.com/problems/trapping-rain-water/
 42. Trapping Rain Water
 Hard
 27.2K
 374
 Companies
 Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


 *
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 Output: 6
 Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 *  */
export function trap(height: number[]): number {
  let max = 0;
  let heightMap: Map<number, number> = new Map();
  for (let i = 0; i < height.length; i++) {
    let currentHeight = height[i];
    heightMap.set(currentHeight, (heightMap.get(currentHeight) ?? 0) + 1)
  }
  let stack: {index: number; level: number; direction: number}[] = []
  for (let i = 0; i < height.length; i++) {
    let currentHeight = height[i];
    heightMap.set(currentHeight, (heightMap.get(currentHeight) ?? 0) + 1)
  }
  return max;

}
