import { expect } from "chai";
import { solution } from "../src/graph";


describe("graph", () => {
  it("should give direct path to true", () => {
    expect(solution(4, [1,2,4,4,3], [2,3,1,3,1])).be.eq(true, "4, [1,2,4,4,3], [2,3,1,3,1]");
    expect(solution(4, [1,2,1,3], [2,4,3,4])).be.eq(false, "4, [1,2,1,3], [2,4,3,4]");
    expect(solution(6, [2,4,5,3], [3,5,6,4])).be.eq(false, "6, [2,4,5,3], [3,5,6,4]");
    expect(solution(3, [1,3], [2,2])).be.eq(true, "3, [1,3], [2,2]");
  });
});
