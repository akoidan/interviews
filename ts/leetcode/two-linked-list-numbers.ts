/**
 * https://leetcode.com/problems/add-two-numbers/
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 * */
export class ListNode2 {
  public val: number
  public next: ListNode2 | null

  constructor(val: number, next: ListNode2 | null) {
    this.val = val;
    this.next = next;
  }
}

function invertList(l1: ListNode2): ListNode2 {
  let newHead1: ListNode2 | null = null;
  let tpl1: null | ListNode2 = l1;
  while (tpl1) {
    let newNode: ListNode2 = new ListNode2(tpl1.val, newHead1);
    newHead1 = newNode;
    tpl1 = tpl1.next;
  }
  return newHead1!;
}

export function addTwoNumbers(l1: ListNode2, l2: ListNode2): ListNode2 {
  let invertedL1: ListNode2 | null = invertList(l1);
  let invertedL2: ListNode2 | null = invertList(l2);

  let nextOrder = 0;
  let head: ListNode2 | null = null;
  let currEl: ListNode2 | null = null;
  while (invertedL1 != null || invertedL2 != null || nextOrder != 0) {
    let summ = (invertedL1?.val || 0) + (invertedL2?.val || 0) + nextOrder;
    nextOrder = summ > 9 ? 1 : 0;
    let nextEl: ListNode2 = new ListNode2(summ % 10, null)
    if (!head) {
      head = nextEl;
    }
    if (currEl) {
      currEl!.next = nextEl;
    }
    currEl = nextEl;
    invertedL1 = invertedL1 ? invertedL1.next : null;
    invertedL2 = invertedL2 ? invertedL2.next : null;
  }
  return head!;
};