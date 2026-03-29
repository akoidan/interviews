import { solution } from "./graph";


describe("graph", () => {
  it("should give direct path to true", () => {
    expect(solution(4, [1,2,4,4,3], [2,3,1,3,1])).toBe(true);
    expect(solution(4, [1,2,1,3], [2,4,3,4])).toBe(false);
    expect(solution(6, [2,4,5,3], [3,5,6,4])).toBe(false);
    expect(solution(3, [1,3], [2,2])).toBe(true);
  });
});
