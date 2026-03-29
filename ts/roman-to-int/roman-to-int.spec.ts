import {romanToInt} from "./roman-to-int";

describe("rom to int", () => {
  it("I === 1", () => {
    expect(romanToInt("I")).toBe(1)
  });
  it("LVIII === 58", () => {
    expect(romanToInt("LVIII")).toBe(58)
  });
  it("MCMXCIV === 1994", () => {
    expect(romanToInt("LVIII")).toBe(58)
  });

});
