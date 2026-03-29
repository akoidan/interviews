import {splitWords, VueComponent} from "./uniqueWordsCount";

describe("uniqueWordsCount", () => {
  describe("split words", () => {
    it('should return correct value', () => {
      let words =splitWords("two two one three three threee");
      expect(words).toHaveLength(6)
    })
  });

  describe("VueApp", () => {
    it("should return correct values for different inputs", () => {
      const app = new VueComponent("one one two two two");
      expect(app.uniqueWordsCountObject).toHaveProperty("one", 2);
      expect(app.uniqueWordsCountObject).toHaveProperty("two", 3);
    });

    it(" empty value should be 0", () => {
      const app = new VueComponent("");
      expect(app.uniqueWordsCountObject).toEqual({});
    })
  })
});
