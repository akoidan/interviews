import {expect} from "chai";
import {findMedianSortedArrays} from "../src/leetcode/median-two-sorted-arrays";

// nums1 = [1,3], nums2 = [2]
describe("median-two-sorted-arrays", () => {
  it("nums1 = [1,3], nums2 = [2]: output = 2", () => {
    expect(findMedianSortedArrays([1,3], [2])).to.be.eq(2);
  });
  it("nums1 = [1,3,7,9], nums2 = [2, 4, 5]: output = 4", () => {
    // 1,2,3,5,7,9,11
    expect(findMedianSortedArrays([1,3,7,9], [2, 4, 5, 11])).to.be.eq(4);
  });

  it("nums1 = [1,2,3,4], nums2 = [5, 6, 7]: output = 4", () => {
    // 1,2,3,5,7,9,11
    expect(findMedianSortedArrays([1,2,3,4], [5, 6, 7])).to.be.eq(4);
  });
  it("nums1 = [1,2,3,7,8,9], nums2 = [4, 5, 6]: output = 4", () => {
    // 1,2,3,5,7,9,11
    expect(findMedianSortedArrays([1,2,3,7,8,9], [4, 5, 6])).to.be.eq(5);
  });
  it("nums1 = [1,2], nums2 = [3, 4]: output = 2.5", () => {
    // 1,2,3,5,7,9,11
    expect(findMedianSortedArrays([1,2], [3, 4])).to.be.eq(5);
  });
});
