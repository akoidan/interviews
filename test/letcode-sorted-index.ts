import {expect} from "chai";
import {getSum} from "../ts/letcode-sorted-index";

describe("letcode index", () => {
  it("should return correct value", () => {
    expect(getSum([1,2,3,4,5,6,14,5], 19)).to.be.eq([4,6]);
  });
});
