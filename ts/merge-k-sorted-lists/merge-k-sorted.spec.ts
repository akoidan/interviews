
import { ListNode, mergeKLists } from "./merge-k-sorted";

function transferArrayToLinkedList(arr: number[]): ListNode {
  let head = new ListNode(arr.shift());
  for (const a of arr) {
    head.next = new ListNode(a);
    head = head.next;
  }
  return head;
}

test("merge k sorted", () => {
  const lls = [[1, 4, 5], [1, 3, 4], [2, 6]].map(k => transferArrayToLinkedList(k))
  const lists = mergeKLists(lls);
});
