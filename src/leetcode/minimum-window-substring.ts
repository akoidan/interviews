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

class FindMap {
  private map: Map<string, number> = new Map();
  private negativeMap: Map<string, number> = new Map();

  public increaseByOne(k: string) {
    let negValue = this.negativeMap.get(k)
    let value = this.map.get(k);
    if (value == undefined && negValue == undefined) {
      this.negativeMap.set(k, 1)
      this.map.set(k, 1)
    } else {
      if (negValue != undefined) {
        this.negativeMap.set(k, negValue + 1)
      }
      if (negValue! >= 0) {
        this.map.set(k, negValue! + 1)
      }
    }
  }

  public decreaseByOne(k: string) {
    let negativeValue = this.negativeMap.get(k)
    if (negativeValue == 1) {
      this.map.delete(k);
      this.negativeMap.set(k, 0)
    } else if (negativeValue! > 1) {
      this.map.set(k, negativeValue! - 1)
      this.negativeMap.set(k, negativeValue! - 1)
    } else {
       this.negativeMap.set(k, negativeValue! - 1)
    }
  }

  isEmpty(): boolean {
    return this.map.size == 0;
  }

  canWeShiftRight(s: string): boolean {
    return this.negativeMap.has(s);
  }
}

export function minWindow(stringValue: string, t: string): string {
  // Input: s = "ADOBECODEBANC", t = "ABC"
  // Output: "BANC"
  let requiredMoreOfCharsMap = new FindMap();
  for (let p of t) {
    requiredMoreOfCharsMap.increaseByOne(p);
  }

  let result = "";
  let endIndex = 0;
  for (let startIndex = 0; startIndex < stringValue.length; startIndex++) {
    let sElement = stringValue[startIndex];
    if (requiredMoreOfCharsMap.canWeShiftRight(sElement)) {
      for (; endIndex < stringValue.length && !requiredMoreOfCharsMap.isEmpty(); endIndex++) {
        let eElement = stringValue[endIndex];
        requiredMoreOfCharsMap.decreaseByOne(eElement);
      }
      if (requiredMoreOfCharsMap.isEmpty()) {
        let newResult = stringValue.substring(startIndex, endIndex)
        if (!result || newResult.length < result.length) {
          result = newResult;
        }
      }
      requiredMoreOfCharsMap.increaseByOne(sElement)
    }
  }
  return result;
}
