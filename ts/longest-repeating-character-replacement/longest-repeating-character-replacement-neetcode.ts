/**
 * Longest Repeating Character Replacement
 * https://neetcode.io/problems/longest-repeating-substring-with-replacement
 * (LeetCode 424)
 *
 * You are given a string s and an integer k. You can choose any character of
 * the string and change it to any other uppercase English character. You can
 * perform this operation at most k times.
 *
 * Return the length of the longest substring containing the same letter you
 * can get after performing the above operations.
 *
 * Example 1:
 *   Input: s = "AABABBA", k = 1
 *   Output: 4
 *   Explanation: Replace one 'A' -> "AABBBBA" or one 'B' -> "AAAABBA", length 4
 *
 * Example 2:
 *   Input: s = "ABAB", k = 2
 *   Output: 4
 *   Explanation: Replace the two 'A's or the two 'B's.
 *
 * Constraints:
 *   1 <= s.length <= 10^5
 *   s consists of only uppercase English letters
 *   0 <= k <= s.length
 */
export function characterReplacement(s: string, k: number): number {
  let charInfo: Record<string, number> = {};
  let maxSize = 0;
  let maxF = 0;
  for (let r = 0, l = 0; r < s.length; r++) {
    charInfo[s[r]] = (charInfo[s[r]] ?? 0) + 1;
    maxF = Math.max(maxF, charInfo[s[r]]);
    while (r - l + 1 - maxF > k) {
      charInfo[s[l]] --;
      l++;
    }
    maxSize = Math.max(maxSize, r - l + 1)
  }
  return maxSize;
}


export function characterReplacementEasy(s: string, k: number): number {
  let charInfo: Record<string, number> = {};
  let maxSize = 0;
  for (let r = 0, l = 0; r< s.length; r++) {
    charInfo[s[r]] = (charInfo[s[r]] ?? 0) + 1;
    while (r - l + 1 - Math.max(...Object.values(charInfo)) > k) {
      charInfo[s[l]] --;
      l++;
    }
    maxSize = Math.max(maxSize, r - l + 1)
  }
  return maxSize;
}
