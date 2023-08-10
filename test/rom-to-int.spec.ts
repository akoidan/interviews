import {expect} from "chai";
import {romanToInt} from "../ts/leetcode/roman-to-int";

describe("rom to int", () => {
  it("I === 1", () => {
    expect(romanToInt("I")).eq(1)
  });
  it("LVIII === 58", () => {
    expect(romanToInt("LVIII")).eq(58)
  });
  it("MCMXCIV === 1994", () => {
    expect(romanToInt("LVIII")).eq(58)
  });

});
