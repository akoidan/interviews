import {expect} from "chai";
import {isPalindrome} from "../ts/leetcode/palindrome";

describe("palindrome number", () => {
  it("121 true", () => {
    expect(isPalindrome(121)).eq(true)
  });
  it("1213 true", () => {
    expect(isPalindrome(1213)).eq(false)
  });
});
