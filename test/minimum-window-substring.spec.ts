import {expect} from "chai";
import {minWindow} from "src/leetcode/minimum-window-substring";

describe("76. Minimum Window Substring", () => {
  it("ADOBECODEBANC, ABC -> BANC", () => {
    expect(minWindow("ADOBECODEBANC","ABC")).eq("BANC")
  });
 it("ADOBECBODEBBAANC, ABC -> BANC", () => {
    expect(minWindow("ADOBECODEBANC","ABC")).eq("BANC")
  });
  it("a, aa -> ''", () => {
    expect(minWindow("a","aa")).eq("")
  });
  it("aa, aa -> ''", () => {
    expect(minWindow("aa","aa")).eq("aa")
  });
  it("a, a -> 'a'", () => {
    expect(minWindow("a","a")).eq("a")
  });
   it("ab, a -> 'a'", () => {
    expect(minWindow("an","a")).eq("a")
  });

    it("aabaa, aaa -> 'a'", () => {
    expect(minWindow("an","a")).eq("a")
  });
});
