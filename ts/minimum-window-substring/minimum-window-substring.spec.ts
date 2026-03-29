import {minWindow} from "./minimum-window-substring";

describe("76. Minimum Window Substring", () => {
  it("ADOBECODEBANC, ABC -> BANC", () => {
    expect(minWindow("ADOBECODEBANC","ABC")).toBe("BANC")
  });
 it("ADOBECBODEBBAANC, ABC -> BANC", () => {
    expect(minWindow("ADOBECODEBANC","ABC")).toBe("BANC")
  });
  it("a, aa -> ''", () => {
    expect(minWindow("a","aa")).toBe("")
  });
  it("aa, aa -> ''", () => {
    expect(minWindow("aa","aa")).toBe("aa")
  });
  it("a, a -> 'a'", () => {
    expect(minWindow("a","a")).toBe("a")
  });
   it("ab, a -> 'a'", () => {
    expect(minWindow("an","a")).toBe("a")
  });

    it("aabaa, aaa -> 'a'", () => {
    expect(minWindow("an","a")).toBe("a")
  });
});
