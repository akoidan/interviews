import * as chaiAsPromised from "chai-as-promised"; // eslint-disable-line import/no-namespace
import * as sinonChai from "sinon-chai"; // eslint-disable-line import/no-namespace
import {expect, use} from "chai";
import {stub} from "sinon";
import {isIsomorphic} from '@/isomorphic';
import {splitWords, VueComponent} from "../src/uniqueWordsCount";
import {A, changeLinkedListDirection, createLinkedList, iterateList} from "../src/listTask";
use(sinonChai);
use(chaiAsPromised);


describe("Isomorphic", () => {
  it("returns true for isomorphic strings", () => {
    expect(isIsomorphic('egg', 'add')).to.be.eq(true);
    expect(isIsomorphic('lol', 'sos')).to.be.eq(true);
    expect(isIsomorphic('', '')).to.be.eq(true);
  });
  it("returns false for non isomorphic strings", () => {
    expect(isIsomorphic('asd', 'as')).to.be.eq(false);
    expect(isIsomorphic('asd', 'bob')).to.be.eq(false);
    expect(isIsomorphic('small', 'kick')).to.be.eq(false);
    expect(isIsomorphic('one', 'kick')).to.be.eq(false);
  })
});





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


describe("LinkedList", () => {
  it("should iterate", () => {
    let a: A = createLinkedList();
    let runs = [
      1, 2, 3, 4
    ];
    let i = 0;
    iterateList(a, (v: A) => {
      expect(v).to.have.property("value", runs[i]);
      i++;
    });
  });

  it("shouldChangeDirection", () => {
    let a: A = createLinkedList();
    a = changeLinkedListDirection(a);
    let runs = [
      4, 3, 2, 1
    ];
    let i = 0;
    iterateList(a, (v: A) => {
      expect(v).to.have.property("value", runs[i]);
      i++;
    });
  });

});
