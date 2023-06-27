//

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
    let currentValuev2 = this.negativeMap.get(k)
    if (this.map.get(k) == undefined && currentValuev2 == undefined) {
      this.negativeMap.set(k, 1)
    }
    if (currentValuev2 != undefined) {
      this.negativeMap.set(k, currentValuev2 + 1)
    }

    if (this.negativeMap.get(k)! >= 1) {
      this.map.set(k, this.negativeMap.get(k)!)
    }
  }

  public decreaseByOne(k: string) {
    let currentValue = this.map.get(k)
    if (currentValue === 1) {
      this.map.delete(k);
    } else if (currentValue) {
      this.map.set(k, currentValue - 1)
    }
    let currentValuev2 = this.negativeMap.get(k)
    if (currentValuev2 != undefined) {
      this.negativeMap.set(k, currentValuev2 - 1)
    }
  }

  isEmpty(): boolean {
    return this.map.size == 0;
  }

  canWeShiftRight(s: string): boolean {
    return this.negativeMap.has(s);
  }
}

export function

minWindow(stringValue: string, t: string): string {
  // Input: s = "ADOBECODEBANC", t = "ABC"
  // Output: "BANC"

  let requiredMoreOfCharsMap = [...t].reduce((p, c) => {
    p.increaseByOne(c)
    return p;
  }, new FindMap())

// aa a=2
  let result = null;
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
  return result || "";
}
