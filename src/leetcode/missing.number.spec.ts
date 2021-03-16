import * as chaiAsPromised from "chai-as-promised"; // eslint-disable-line import/no-namespace
import * as sinonChai from "sinon-chai"; // eslint-disable-line import/no-namespace
import { expect, use } from "chai";
import { findErrorNums } from './mismatch';
import { missingNumber } from '@/leetcode/missing.number';

use(sinonChai);
use(chaiAsPromised);

describe("findErrorNums", () => {
  it("returns true for isomorphic strings", () => {
    expect(missingNumber([2,1])).to.be.eq(0);
  })
});
