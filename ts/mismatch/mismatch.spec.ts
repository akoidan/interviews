import { findErrorNums } from './mismatch';

describe("findErrorNums", () => {
  it("returns true for isomorphic strings", () => {
    expect(findErrorNums([1,1])).toEqual([1,2]);
  })
});
