import {isIsomorphic} from "./isomorphic";

describe("Isomorphic", () => {
  it("returns true for isomorphic strings", () => {
    expect(isIsomorphic('egg', 'add')).toBe(true);
    expect(isIsomorphic('lol', 'sos')).toBe(true);
    expect(isIsomorphic('', '')).toBe(true);
  });
  it("returns false for non isomorphic strings", () => {
    expect(isIsomorphic('asd', 'as')).toBe(false);
    expect(isIsomorphic('asd', 'bob')).toBe(false);
    expect(isIsomorphic('small', 'kick')).toBe(false);
    expect(isIsomorphic('one', 'kick')).toBe(false);
  })
});
