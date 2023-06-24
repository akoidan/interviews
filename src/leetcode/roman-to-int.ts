/*
 https://leetcode.com/problems/roman-to-integer/
 Roman to Integer
 Easy
 11K
 631
 Companies
 Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

 Symbol       Value
 I             1
 V             5
 X             10
 L             50
 C             100
 D             500
 M             1000
 For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

 Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

 I can be placed before V (5) and X (10) to make 4 and 9.
 X can be placed before L (50) and C (100) to make 40 and 90.
 C can be placed before D (500) and M (1000) to make 400 and 900.
 Given a roman numeral, convert it to an integer.



 Example 1:

 Input: s = "III"
 Output: 3
 Explanation: III = 3.
 Example 2:

 Input: s = "LVIII"
 Output: 58
 Explanation: L = 50, V= 5, III = 3.
 Example 3:

 Input: s = "MCMXCIV"
 Output: 1994
 Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


 Constraints:

 1 <= s.length <= 15
 s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 * */

const validCharacters: {rom: string; num: number}[] = [
  {rom: "II", num: 2},
  {rom: "III", num: 3},
  {rom: "IV", num: 4},
  {rom: "IX", num: 9},
  {rom: "XL", num: 40},
  {rom: "XC", num: 90},
  {rom: "CD", num: 400},
  {rom: "CM", num: 900},
  {rom: "I", num: 1},
  {rom: "V", num: 5},
  {rom: "X", num: 10},
  {rom: "L", num: 50},
  {rom: "C", num: 100},
  {rom: "D", num: 500},
  {rom: "M", num: 1000}
];

function getNumber(s: string) {
  for (let i = 0; i < validCharacters.length; i++) {
    let searchString = validCharacters[i].rom;
    if (s.startsWith(searchString)) {
      return {s: s.substring(searchString.length), n: validCharacters[i].num}
    }
  }
  throw Error(`invalid start ${s}`);
}
//   {rom: "II", num: 2},
//   {rom: "III", num: 3},
//   {rom: "IV", num: 4},
//   {rom: "IX", num: 9},
//   {rom: "XL", num: 40},
//   {rom: "XC", num: 90},
//   {rom: "CD", num: 400},
//   {rom: "CM", num: 900},

export function romanToInt(s: string): number {
  let prevChar = ""
  let totalNumber = 0;
  let matrix: Record<string, {v: number; prev: string; prevMin: number}> = {
    "I": {v: 1, prev: "", prevMin: 0},
    "V": {v: 5, prev: "I", prevMin: -2},
    "X": {v: 10, prev: "I", prevMin: -2},
    "L": {v: 50, prev: "X", prevMin: -20},
    "C": {v: 100, prev: "X", prevMin: -20},
    "D": {v: 500, prev: "C", prevMin: -200},
    "M": {v: 1000, prev: "C", prevMin: -200},
  }
  for (let i = 0; i < s.length; i++) {
    let match = matrix[s[i]]
    if (!match) {
      throw Error(`Invalid string ${s[i]}`)
    }
    totalNumber += match.v;
    if (prevChar === match.prev) {
      totalNumber += match.prevMin;
    }
    prevChar = s[i];
  }
  return totalNumber;
}

export function romanToInt2(s: string): number {
  let number = 0;

  while (s != "") {
    let res = getNumber(s);
    s = res.s
    number += res.n;
  }
  return number;
}
