import { expect } from "chai";
import { getIntersectionFloyd, LinkedList } from "../src/leetcode/floyd";

describe("getIntersectionFloyd", () => {
  it("0-7 = 5", () => {
    let val0 = new LinkedList(0, null);
    let val1 = new LinkedList(1, null);
    let val2 = new LinkedList(2, null);
    let val3 = new LinkedList(3, null);
    let val4 = new LinkedList(4, null);
    let val5 = new LinkedList(5, null);
    let val6 = new LinkedList(6, null);
    let val7 = new LinkedList(7, null);
    val0.next = val1;
    val1.next = val2;
    val2.next = val3;
    val3.next = val4;
    val4.next = val5;
    val5.next = val6;
    val6.next = val7;
    val7.next = val5;

    let intersectionFloyd = getIntersectionFloyd(val0);
    expect(intersectionFloyd).eq(val5)
  });
});




