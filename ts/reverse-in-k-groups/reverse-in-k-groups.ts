export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function checkNumberOfNodesGreaterK(head: ListNode|null, k: number): head is ListNode {
  if (head == null && k > 0) {
    return true;
  }
  let i = 1;
  for (; head; i++) {
    head = head.next;
    if (i >= k) {
      return true;
    }
  }
  return false;
}
function invertList(head: ListNode, k: number) {
  let firstEl: ListNode = head;
  let nextElement: ListNode | null = head.next;
  for (let i = 1; i < k; i++) {
    if (nextElement == null) {
      throw Error(`K is greater than number elements ${i}`);
    }
    const p2nO: ListNode | null = nextElement.next;
    nextElement.next = firstEl;
    firstEl = nextElement;
    nextElement = p2nO;
  }
  head.next = null;
  return {firstEl, nextElement};
}

export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (k < 0) {
    throw Error(`K is greater than number elements ${k}`);
  }
  if (!checkNumberOfNodesGreaterK(head, k)) {
    return head;
  }
  if (k == 1) {
    return head;
  }
  if (!head.next) {
    return head;
  }
  let currentHead = head;
  let result: ListNode|null = null;
  let prevTail: ListNode|null = null;
  while (true) {
    if (!checkNumberOfNodesGreaterK(currentHead, k)) {
      if (!result) {
        return head;
      } else if (prevTail) {
        prevTail.next = currentHead;
        return result; // connect previous
      } else {
        throw Error("Internal error, we shouldnt be here")
      }
    }
    let {firstEl, nextElement} = invertList(currentHead, k);
    if (prevTail) {
      prevTail.next = firstEl;
    } else {
      result = firstEl;
    }
    if (!nextElement) {
      return result;
    }
    prevTail = currentHead;
    currentHead = nextElement;
  }
}
