import { findErrorNums } from 'ts/mismatch/mismatch';
import { distributeCandies } from './candies';

describe("findErrorNums", () => {
  it("returns true for isomorphic strings", () => {
    expect(distributeCandies([1,1])).toBe(1);
  })
});
