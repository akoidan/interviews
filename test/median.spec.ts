import * as chaiAsPromised from "chai-as-promised"; // eslint-disable-line import/no-namespace
import * as sinonChai from "sinon-chai"; // eslint-disable-line import/no-namespace
import {
  expect,
  use
} from "chai";
import {findMedianSortedArrays} from 'ts/leetcode/median';

use(sinonChai);
use(chaiAsPromised);

describe("median two arrays", () => {
  it("[1,3,7,12,14]", () => {
    expect(findMedianSortedArrays([1, 3, 7, 12, 14], [2, 5, 9, 45])).to.be.eq(7);
  })
  it("[1,4,7,9,10,13,18], [2,3,5,8,11,14,19,21,22,23]", () => {
    expect(findMedianSortedArrays([1, 4, 7, 9, 10, 13, 18], [2, 3, 5, 8, 11, 14, 19, 21, 22, 23])).to.be.eq(10);
  })

  it("[1,3], [2]", () => {
    expect(findMedianSortedArrays([1, 3], [2])).to.be.eq(2);
  })

  it("[2,2,4,4], [2,2,4,4]", () => {
    expect(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 4, 4])).to.be.eq(3);
  })

  it("[1,2], [3,4]", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).to.be.eq(2.5);
  })

  it("[], [2,3]", () => {
    expect(findMedianSortedArrays([], [2, 3])).to.be.eq(2.5);
  })

  it("[1,2], [-1,3]", () => {
    expect(findMedianSortedArrays([1, 2], [-1, 3])).to.be.eq(1.5);
  })

});

