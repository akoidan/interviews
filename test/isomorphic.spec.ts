import {expect} from "chai";
import {isIsomorphic} from "../ts/isomorphic";

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
