import { characterReplacement } from "./longest-repeating-character-replacement";

describe("longest-repeating-character-replacement", () => {
  it("AABABBA k=1 -> 4", () => {
    expect(characterReplacement("AABABBA", 1)).toBe(4);
  });

  it("ABAB k=2 -> 4", () => {
    expect(characterReplacement("ABAB", 2)).toBe(4);
  });

  it("AAAA k=0 -> 4 (no replacements needed)", () => {
    expect(characterReplacement("AAAA", 0)).toBe(4);
  });

  it("AAAA k=2 -> 4 (no replacements needed)", () => {
    expect(characterReplacement("AAAA", 2)).toBe(4);
  });

  it("ABCD k=0 -> 1 (no replacements)", () => {
    expect(characterReplacement("ABCD", 0)).toBe(1);
  });

  it("ABCD k=3 -> 4 (replace all but one)", () => {
    expect(characterReplacement("ABCD", 3)).toBe(4);
  });

  it("single char k=0 -> 1", () => {
    expect(characterReplacement("A", 0)).toBe(1);
  });

  it("AABABBA k=2 -> 5", () => {
    expect(characterReplacement("AABABBA", 2)).toBe(5);
  });

  it("performance: 100k random uppercase chars", () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const s = Array.from({length: 1000_000}, () => chars[Math.floor(Math.random() * 26)]).join("");
    const k = 1000;

    const start = performance.now();
    const result = characterReplacement(s, k);
    const elapsed = performance.now() - start;

    console.log(`result=${result}, elapsed=${elapsed.toFixed(2)}ms`);
    expect(elapsed).toBeLessThan(10000);
  });
});
