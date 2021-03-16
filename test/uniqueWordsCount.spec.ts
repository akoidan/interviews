import {splitWords, VueComponent} from "../src/uniqueWordsCount";
import {expect} from "chai";

describe("uniqueWordsCount", () => {
  describe("split words", () => {
    it('should return correct value', () => {
      let words =splitWords("two two one three three threee");
      expect(words).to.have.length(6)
    })
  });

  describe("VueApp", () => {
    it("should return correct values for different inputs", () => {
      const app = new VueComponent("one one two two two");
      expect(app.uniqueWordsCountObject).to.have.property("one", 2);
      expect(app.uniqueWordsCountObject).to.have.property("two", 3);
    });

    it(" empty value should be 0", () => {
      const app = new VueComponent("");
      expect(app.uniqueWordsCountObject).to.be.empty;
    })
  })
});
