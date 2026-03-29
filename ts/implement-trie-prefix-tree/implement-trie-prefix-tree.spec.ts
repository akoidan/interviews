import {Trie} from "./implement-trie-prefix-tree";


describe("graph", () => {
  it("should give direct path to true", () => {
    let trie = new Trie();
    trie.insert("apple");
    expect(trie.search("apple")).toBe(true);
    expect(trie.startsWith("app")).toBe(true);
    expect(trie.search("app")).toBe(false);
    trie.insert("app");
    expect(trie.search("app")).toBe(true);
  });
});
