/*


 853. Car Fleet
 Medium
 2.6K
 629
 Companies
 There are n cars going to the same destination along a one-lane road. The destination is target miles away.

 You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

 A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

 A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

 If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

 Return the number of car fleets that will arrive at the destination.



 Example 1:

 Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
 Output: 3
 Explanation:
 The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
 The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
 The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
 Note that no other cars meet these fleets before the destination, so the answer is 3.
 Example 2:

 Input: target = 10, position = [3], speed = [3]
 Output: 1
 Explanation: There is only one car, hence there is only one fleet.
 Example 3:

 Input: target = 100, position = [0,2,4], speed = [4,2,1]
 Output: 1
 Explanation:
 The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2.
 Then, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.


 Constraints:

 n == position.length == speed.length
 1 <= n <= 105
 0 < target <= 106
 0 <= position[i] < target
 All the values of position are unique.
 0 < speed[i] <= 106
 https://leetcode.com/problems/car-fleet/
 *  */
import {expect} from "chai";
import {kthSmallest} from "../ts/leetcode/kth-smallest-element-in-a-bst";
import {convertArrayToTree} from "ts/leetcode/tree";

describe("kth-smallest-element-in-a-bst", () => {
  it("1234 1", () => {
    let tree = convertArrayToTree([3, 1, 4, null, 2]);
    expect(kthSmallest(tree!, 1)).eq(1)
  });

  it("[10, 8, 0, 5, 3] 3", () => {
    let arr = [41, 37, 44, 24, 39, 42, 48, 1, 35, 38, 40, null, 43, 46, 49, 0, 2, 30, 36, null, null, null, null, null, null, 45, 47, null, null, null, null, null, 4, 29, 32, null, null, null, null, null, null, 3, 9, 26, null, 31, 34, null, null, 7, 11, 25, 27, null, null, 33, null, 6, 8, 10, 16, null, null, null, 28, null, null, 5, null, null, null, null, null, 15, 19, null, null, null, null, 12, null, 18, 20, null, 13, 17, null, null, 22, null, 14, null, null, 21, 23];
    let arr3 = arr.filter(a => a != null).sort((a, b) => a! - b!);
    let tree = convertArrayToTree(arr);
    expect(kthSmallest(tree!, 25)).eq(24)
  });
});




