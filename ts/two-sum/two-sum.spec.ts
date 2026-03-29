import {twoSum} from "./two-sum";

describe("two sum", () => {
  it("[2,7,11,15] -> 9", () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1])
  });
  it("throws", () => {
    expect(() => twoSum([2,7,11,15], 232)).toThrow("No such elements")
  });
});
