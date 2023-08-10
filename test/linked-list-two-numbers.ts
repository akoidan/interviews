import {expect} from "chai";
import {addTwoNumbers, ListNode2} from "../ts/leetcode/two-linked-list-numbers";

describe("linked list two numbers", () => {
  it("Same length: [2,4,3], [5,6,4] -> [7,0,8]", () => {
    let l1 = new ListNode2(2, new ListNode2(4, new ListNode2(3, null)))
    let l2 = new ListNode2(5, new ListNode2(6, new ListNode2(4, null)))
    let result = addTwoNumbers(l1, l2)

    expect(result.val).to.be.eq(7);
    expect(result!.next!.val).to.be.eq(0);
    expect(result!.next!.next!.val).to.be.eq(8);
    expect(result!.next!.next!.next).to.be.eq(null);
  });
  it("1 Node length: [0], [0] -> [0]", () => {
    let l1 = new ListNode2(0, null);
    let l2 = new ListNode2(0, null);
    let result = addTwoNumbers(l1, l2)

    expect(result.val).to.be.eq(0);
    expect(result!.next).to.be.eq(null);
  });
  it("Different length + result 1 Node bigger: [9,9,9,9,9,9,9] -> [9,9,9,9] -> [8,9,9,9,0,0,0,1]", () => {
    let l1 = new ListNode2(9,
      new ListNode2(9,
        new ListNode2(9,
          new ListNode2(9,
            new ListNode2(9,
              new ListNode2(9,
                new ListNode2(9, null)
              )
            )
          )
        )
      )
    )
    let l2 = new ListNode2(9, new ListNode2(9, new ListNode2(9, new ListNode2(9, null))))
    let result = addTwoNumbers(l1, l2)

    expect(result.val).to.be.eq(8);
    expect(result!.next!.val).to.be.eq(9);
    expect(result!.next!.next!.val).to.be.eq(9);
    expect(result!.next!.next!.next!.val).to.be.eq(9);
    expect(result!.next!.next!.next!.next!.val).to.be.eq(0);
    expect(result!.next!.next!.next!.next!.next!.val).to.be.eq(0);
    expect(result!.next!.next!.next!.next!.next!.next!.val).to.be.eq(0);
    expect(result!.next!.next!.next!.next!.next!.next!.next!.val).to.be.eq(1);
    expect(result!.next!.next!.next!.next!.next!.next!.next!.next).to.be.eq(null);
  });
});
