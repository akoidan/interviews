/*

 https://leetcode.com/problems/minimum-window-substring/

 Given two strings s and t of lengths m and n respectively, return the minimum window
 substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

 The testcases will be generated such that the answer is unique.



 Example 1:

 Input: s = "ADOBECODEBANC", t = "ABC"
 Output: "BANC"
 Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 Example 2:

 Input: s = "a", t = "a"
 Output: "a"
 Explanation: The entire string s is the minimum window.
 Example 3:

 Input: s = "a", t = "aa"
 Output: ""
 Explanation: Both 'a's from t must be included in the window.
 Since the largest window of s only has one 'a', return empty string.


 Constraints:

 m == s.length
 n == t.length
 1 <= m, n <= 105
 s and t consist of uppercase and lowercase English letters.

 * */


export function minWindow(s: string, t: string): string {
  let needCountMap: Map<string, number> = new Map();
  let haveCount: Map<string, number> = new Map();
  for (let p of t) {
    needCountMap.set(p, (needCountMap.get(p) || 0) + 1);
    haveCount.set(p, 0);
  }
  let totalCharacterFilled = 0;
  let totalCharacterNeed = needCountMap.size;
  let result = "";
  for (let [r, l] = [0, 0]; r < s.length; r++) {
    let rc = s[r];
    let needRCount = needCountMap.get(rc)
    if (needRCount) {
      let haveRightCount = haveCount.get(rc)! + 1;
      haveCount.set(rc, haveRightCount)
      if (haveRightCount === needRCount) {
        totalCharacterFilled++;
      }
    }
    for (; totalCharacterFilled == totalCharacterNeed && l < s.length; l++) {
      if (!result || r + 1 - l < result.length) {
        result = s.substring(l, r + 1)
      }
      let lChar = s[l];
      let needLCount = needCountMap.get(lChar);
      if (needLCount) {
        let haveLCount = haveCount.get(lChar)!;
        haveCount.set(lChar, haveLCount - 1)
        if (needLCount === haveLCount) {
          totalCharacterFilled--;
        }
      }
    }
  }
  return result;
}
