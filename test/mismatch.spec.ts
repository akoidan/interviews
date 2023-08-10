import * as chaiAsPromised from "chai-as-promised"; // eslint-disable-line import/no-namespace
import * as sinonChai from "sinon-chai"; // eslint-disable-line import/no-namespace
import {expect, use} from "chai";
import { findErrorNums } from 'ts/leetcode/mismatch';
use(sinonChai);
use(chaiAsPromised);

describe("findErrorNums", () => {
  it("returns true for isomorphic strings", () => {
    expect(findErrorNums([1,1])).to.be.eq([1,2]);
  })
});
