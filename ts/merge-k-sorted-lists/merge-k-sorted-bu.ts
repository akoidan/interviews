export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null
  }
  if (lists.length === 1) {
    return lists[0];
  }
  let startIndex = 0;
  while (startIndex < lists.length && lists[startIndex] == null) {
    startIndex++
  }
  if (startIndex == lists.length) {
    return null
  }
  let resultHead = copyList(lists[startIndex]!); // we should nto get null here as we checked before
  for (let i = startIndex + 1; i < lists.length; i++) {
    if (!lists[i]) {
      continue;
    }
    let newPtr: ListNode;
    let currPtr: ListNode | null = null;
    if (resultHead.val > lists[i]!.val) {
      resultHead = new ListNode(lists[i]!.val, resultHead);
      newPtr = resultHead;
      currPtr = lists[i]!.next;
    } else {
      newPtr = resultHead;
      currPtr = lists[i];
    }

    while (currPtr) {
      while (newPtr.next && newPtr.next.val < currPtr.val) {
        newPtr = newPtr.next;
      }

      newPtr.next = new ListNode(currPtr.val, newPtr.next);
      currPtr = currPtr.next;
      newPtr = newPtr.next;
    }
  }

  return resultHead;
};


function copyList(list: ListNode): ListNode {
  let resultHead: ListNode = new ListNode(list.val, null);
  let oPtr: ListNode | null = list.next;
  let nPtr = resultHead;
  while (oPtr) {
    nPtr.next = new ListNode(oPtr.val, null);
    oPtr = oPtr.next;
    nPtr = nPtr.next;
  }
  return resultHead;
}
