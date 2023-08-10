import {expect} from "chai";
import {reverseArray, rotate} from "../ts/reverse";

describe("reverse.ts", () => {
  it("should reverse an array", () => {
    expect(reverseArray(['1', '2', '3', '4'])).to.deep.eq(['4', '3', '2', '1']);
  });
  it("reverse words", () => {
    expect(rotate("The sky is blue")).to.be.eq("blue is sky The");
  });
});
