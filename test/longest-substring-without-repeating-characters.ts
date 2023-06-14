import {expect} from "chai";
import {lengthOfLongestSubstring} from "../src/leetcode/longest-substring-without-repeating-characters";

describe("letcode longest-substring-without-repeating-characters", () => {
  it("a = 1", () => {
    expect(lengthOfLongestSubstring("a")).to.be.eq(1);
  });
  it("abcabcbb = 3", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).to.be.eq(3);
  });
  it("pwwkew = 3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).to.be.eq(3);
  });

  it("tmmzuxt = 5", () => {
    expect(lengthOfLongestSubstring("tmmzuxt")).to.be.eq(5);
  });


});
