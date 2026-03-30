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

class CharsInfo {

  constructor(
    private readonly k: number,
    private mostCommon: string
  ) {
  }

  private allSymbols: Record<string, number> = {};


  isCorrect(): boolean {
    let count = 0;
    for (const [k,v] of Object.entries(this.allSymbols)) {
      if (k === this.mostCommon) {
        continue
      }
      count += v;
    }
    return count <= this.k;
  }

  addSymbol(symb: string): void {
    if (!this.allSymbols[symb]) {
      this.allSymbols[symb] = 0;
    }
    this.allSymbols[symb]++;
    if (this.allSymbols[symb] > this.allSymbols[this.mostCommon]) {
      this.mostCommon = symb;
    }
  }

  removeSymbol(symb: string): void {
    if (!this.allSymbols[symb]) {
      throw Error(`Unrecognized symbol '${symb}'`);
    }
    this.allSymbols[symb]--;
    if (this.mostCommon == symb) {
      let maxCount = this.allSymbols[this.mostCommon];
      for (const [k,v] of Object.entries(this.allSymbols)) {
        if (v > maxCount) {
          this.mostCommon = k;
          maxCount = v;
          return ; // technically only 1 is enough
        }
      }
    }
  }
}

export function characterReplacement(s: string, k: number): number {
  if (s.length === 0) {
    return 0;
  }
  let maxSize = 1;
  const charInfo = new CharsInfo(k, s[0]);
  let r = 0, l = 0;
  charInfo.addSymbol(s[0]);
  while (true) {
    if (charInfo.isCorrect()) {
      maxSize = Math.max(maxSize, r - l + 1);
      r++;
      if (r >= s.length) {
        break;
      }
      charInfo.addSymbol(s[r]);
    } else {
      charInfo.removeSymbol(s[l])
      l++;
    }
  }
  return maxSize;
}
