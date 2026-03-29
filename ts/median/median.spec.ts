import {findMedianSortedArrays} from './median';

describe("median two arrays", () => {
  it("[1,3,7,12,14]", () => {
    expect(findMedianSortedArrays([1, 3, 7, 12, 14], [2, 5, 9, 45])).toBe(7);
  })
  it("[1,4,7,9,10,13,18], [2,3,5,8,11,14,19,21,22,23]", () => {
    expect(findMedianSortedArrays([1, 4, 7, 9, 10, 13, 18], [2, 3, 5, 8, 11, 14, 19, 21, 22, 23])).toBe(10);
  })

  it("[1,3], [2]", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  })

  it("[2,2,4,4], [2,2,4,4]", () => {
    expect(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 4, 4])).toBe(3);
  })

  it("[1,2], [3,4]", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  })

  it("[], [2,3]", () => {
    expect(findMedianSortedArrays([], [2, 3])).toBe(2.5);
  })

  it("[1,2], [-1,3]", () => {
    expect(findMedianSortedArrays([1, 2], [-1, 3])).toBe(1.5);
  })

});

