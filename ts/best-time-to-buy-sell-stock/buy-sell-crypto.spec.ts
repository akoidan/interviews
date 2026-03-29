import {Solution} from "./buy-sell-crypto";

describe("buy sell crypto", () => {
  it("ex 1", () => {
    expect(new Solution().maxProfit( [10,1,5,6,7,1])).toEqual(6);
  });
});
