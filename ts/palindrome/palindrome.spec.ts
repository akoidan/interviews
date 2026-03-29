import {isPalindrome} from "./palindrome";

describe("palindrome number", () => {
  it("121 true", () => {
    expect(isPalindrome(121)).toBe(true)
  });
  it("1213 true", () => {
    expect(isPalindrome(1213)).toBe(false)
  });
});
