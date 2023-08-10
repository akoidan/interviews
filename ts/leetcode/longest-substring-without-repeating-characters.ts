/*
 Given a string s, find the length of the longest
 substring
 without repeating characters.

 https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

 Example 1:

 Input: s = "abcabcbb"
 Output: 3
 Explanation: The answer is "abc", with the length of 3.
 Example 2:

 Input: s = "bbbbb"
 Output: 1
 Explanation: The answer is "b", with the length of 1.
 Example 3:

 Input: s = "pwwkew"
 Output: 3
 Explanation: The answer is "wke", with the length of 3.
 Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


 Constraints:

 0 <= s.length <= 5 * 104
 s consists of English letters, digits, symbols and spaces.
 */


export function lengthOfLongestSubstring(s: string): number {
  let set = new Map();
  let biggestAmount: number = 0;
  let lastReset = 0;
  for (let i = 0; i < s.length; i ++) {
    let current = s[i];
    let lastIndexOfCurrentChar = set.get(current);
    set.set(current, i)
    if (lastIndexOfCurrentChar != undefined && lastIndexOfCurrentChar >= lastReset) {
      lastReset = lastIndexOfCurrentChar + 1 ;
    } else {
      let newAmount = i - lastReset + 1;
      if (newAmount > biggestAmount) {
        biggestAmount = newAmount;
      }
    }
  }
  return biggestAmount;
};

export function lengthOfLongestSubstringAlpha(s: string): number {

  let set = new Map();
  let biggestAmount: number = 0;
  let i = 0;
  while (i < s.length) {
    let current = s[i];
    if (set.has(current)) {
      biggestAmount = Math.max(set.size, biggestAmount);
      i = set.get(current)
      set.clear()
    } else {
      set.set(current, i)
    }
    i ++;
  }
  return Math.max(set.size, biggestAmount);
};
