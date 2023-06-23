import * as chaiAsPromised from "chai-as-promised"; // eslint-disable-line import/no-namespace
import * as sinonChai from "sinon-chai"; // eslint-disable-line import/no-namespace
import {expect, use} from "chai";
import { findMedianSortedArrays } from './median';
use(sinonChai);
use(chaiAsPromised);

describe("median two arrays", () => {
  it("returns correct value", () => {
    expect(findMedianSortedArrays([1,3,7,12,14], [2,5,9,45,78])).to.be.eq(2);
  })
});

