import { expect } from "chai";
import { dailyTemperatures } from "../ts/leetcode/daily-temperatures";

describe("daily-temperatures", () => {
  it("[73,74,75,71,69,72,76,73]", () => {
    expect(dailyTemperatures([73,74,75,71,69,72,76,73])).deep.eq([1,1,4,2,1,1,0,0])
  });
});




