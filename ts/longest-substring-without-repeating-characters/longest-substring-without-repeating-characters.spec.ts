import {lengthOfLongestSubstring} from "./longest-substring-without-repeating-characters";

describe("letcode longest-substring-without-repeating-characters", () => {
  it("a = 1", () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
  });
  it("abcabcbb = 3", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });
  it("pwwkew = 3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  it("tmmzuxt = 5", () => {
    expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5);
  });


});
