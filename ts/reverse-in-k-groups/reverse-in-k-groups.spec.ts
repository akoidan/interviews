import {checkNumberOfNodesGreaterK, ListNode, reverseKGroup} from "./reverse-in-k-groups";

function transferArrayToLinkedList(arr: number[]): ListNode | null {
  if (arr.length == 0) {
    return null;
  }
  const result = new ListNode(arr.shift());
  let head = result;
  for (const a of arr) {
    head.next = new ListNode(a);
    head = head.next;
  }
  return result;
}


function transferLinkedListToArray(node: ListNode | null): number[] {
  const result: number[] = [];
  for (let a = node; a; a = a.next) {
    result.push(a.val);
  }
  return result;
}

test("checkNumberOfNodesGreaterK true", () => {
  const lls = transferArrayToLinkedList([1,2,3])
  expect(checkNumberOfNodesGreaterK(lls, 2)).toEqual(true);
});

test("checkNumberOfNodesGreaterK exactly true", () => {
  const lls = transferArrayToLinkedList([1,2,3])
  expect(checkNumberOfNodesGreaterK(lls, 3)).toEqual(true);
});

test("checkNumberOfNodesGreaterK false", () => {
  const lls = transferArrayToLinkedList([1,2,3])
  expect(checkNumberOfNodesGreaterK(lls, 4)).toEqual(false);
});



test("Minimal example k=3", () => {
  const lls = transferArrayToLinkedList([1,2,3,4,5,6])
  const results = reverseKGroup(lls, 3);
  const transfer = transferLinkedListToArray(results!);
  expect(transfer).toEqual([3,2,1,6,5,4])
});

test("Minimal example k=2", () => {
  const lls = transferArrayToLinkedList([1,2,3,4,5])
  const results = reverseKGroup(lls, 2);
  const transfer = transferLinkedListToArray(results!);
  expect(transfer).toEqual([2,1,4,3,5])
});

test("nothing after k", () => {
  const lls = transferArrayToLinkedList([1,2,3])
  const results = reverseKGroup(lls, 3);
  const transfer = transferLinkedListToArray(results!);
  expect(transfer).toEqual([3,2,1])
});

test("One element", () => {
  const lls = transferArrayToLinkedList([1])
  const results = reverseKGroup(lls, 0);
  const transfer = transferLinkedListToArray(results!);
  expect(transfer).toEqual([1])
});

test("No elements", () => {
  const lls = transferArrayToLinkedList([])
  const results = reverseKGroup(lls, 0);
  expect(results).toEqual(null)
});


test("One element in tail", () => {
  const lls = transferArrayToLinkedList([1,2,3,4])
  const results = reverseKGroup(lls, 3);
  const transfer = transferLinkedListToArray(results!);
  expect(transfer).toEqual([3,2,1,4])
});
