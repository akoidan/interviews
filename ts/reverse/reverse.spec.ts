import {reverseArray, rotate} from "./reverse";

describe("reverse.ts", () => {
  it("should reverse an array", () => {
    expect(reverseArray(['1', '2', '3', '4'])).toEqual(['4', '3', '2', '1']);
  });
  it("reverse words", () => {
    expect(rotate("The sky is blue")).toBe("blue is sky The");
  });
});
