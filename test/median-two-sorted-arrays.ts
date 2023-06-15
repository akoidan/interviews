import {expect} from "chai";
import {findMedianSortedArrays} from "../src/leetcode/median-two-sorted-arrays";

// nums1 = [1,3], nums2 = [2]
describe("median-two-sorted-arrays", () => {
  it("nums1 = [1,3], nums2 = [2]: output = 2", () => {
    expect(findMedianSortedArrays([1,3], [2])).to.be.eq(2);
  });
  it("nums1 = [1,3,7,9], nums2 = [2, 4, 5]: output = 4", () => {
    // 1,2,3,5,7,9,11
    expect(findMedianSortedArrays([1,3,7,9], [2, 4, 5])).to.be.eq(4.);
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
    expect(findMedianSortedArrays([1,2], [3, 4])).to.be.eq(2.5);
  });
  it("nums1 = [1], nums2 = []: output = 1", () => {
    expect(findMedianSortedArrays([1], [])).to.be.eq(1);
  });
  it("nums1 = [], nums2 = [1]: output = 1", () => {
    expect(findMedianSortedArrays([], [1])).to.be.eq(1);
  });
  it("nums1 = [1,3], nums2 = [2,7]: output = 1", () => {
    expect(findMedianSortedArrays([1,3], [2,7])).to.be.eq(2.5);
  });

  it("nums1 = [1,3], nums2 = []: output = 2", () => {
    expect(findMedianSortedArrays([1,3], [])).to.be.eq(2);
  });
  it("nums1 = [2,3,4,5], nums2 = []: output = 3.5", () => {
    expect(findMedianSortedArrays([2,3,4,5], [])).to.be.eq(3.5);
  });
  it("nums1 = [1], nums2 = [2,3]: output = 2", () => {
    expect(findMedianSortedArrays([1], [2,3])).to.be.eq(2);
  });
  it("nums1 = [2,3,4], nums2 = [1]: output = 2.5", () => {
    expect(findMedianSortedArrays([2,3,4], [1])).to.be.eq(2.5);
  });
  it("nums1 = [0,0], nums2 = [0,0]: output = 0", () => {
    expect(findMedianSortedArrays([0,0], [0, 0])).to.be.eq(0);
  });
  it("nums1 = [], nums2 = [1,2,3,4]: output = 2.5", () => {
    expect(findMedianSortedArrays([], [1,2,3,4])).to.be.eq(2.5);
  });
});
