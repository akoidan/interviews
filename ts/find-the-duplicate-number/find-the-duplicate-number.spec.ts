import {findDuplicate} from "./find-the-duplicate-number";

describe("find-the-duplicate-number", () => {
  it("[1,3,4,2,2]", () => {
    expect(findDuplicate([1,3,4,2,2])).toBe(2)
  });

});

