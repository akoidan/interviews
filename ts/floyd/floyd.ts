export class LinkedList {
  constructor(
    public val: number,
    public next: LinkedList | null
  ) {
  }
}

export function getIntersectionFloyd(root: LinkedList) {
  let fastPointer: LinkedList = root;
  let slowPointer: LinkedList = root;
  do {
    fastPointer = fastPointer.next?.next!;
    slowPointer = slowPointer.next!;
  } while (fastPointer != slowPointer)
  let slow2 = root;
  while (slow2 != slowPointer) {
    slow2 = slow2.next!;
    slowPointer = slowPointer.next!;
  }
  return slowPointer;
}
