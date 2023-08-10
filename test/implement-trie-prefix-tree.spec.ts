import {expect} from "chai";
import {Trie} from "../ts/leetcode/implement-trie-prefix-tree";


describe("graph", () => {
  it("should give direct path to true", () => {
    let trie = new Trie();
    trie.insert("apple");
    expect(trie.search("apple")).be.eq(true);
    expect(trie.startsWith("app")).be.eq(true);
    expect(trie.search("app")).be.eq(false);
    trie.insert("app");
    expect(trie.search("app")).be.eq(true);
  });
});
