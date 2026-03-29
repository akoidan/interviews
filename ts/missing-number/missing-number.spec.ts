import { findErrorNums } from 'ts/mismatch/mismatch';
import { missingNumber } from './missing-number';

describe("findErrorNums", () => {
  it("returns true for isomorphic strings", () => {
    expect(missingNumber([2,1])).toBe(0);
  })
});
