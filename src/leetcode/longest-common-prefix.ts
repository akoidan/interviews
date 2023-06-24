/*
https://leetcode.com/problems/longest-common-prefix/
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
* */
// ["ab","a"]
export function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = strs[0];
    for (let i = 1; i < strs.length; i ++) {
      let j = 0;
      for (;j < Math.min(commonPrefix.length, strs[i].length); j ++) {
        if (commonPrefix[j] != strs[i][j]) {
          break;
        }
      }
      commonPrefix = commonPrefix.substring(0, j);
    }
    return commonPrefix;
}
