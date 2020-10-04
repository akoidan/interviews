export class A {
  next?: A;
  value: number;
  constructor(value: number, next?: A) {
    this.next = next;
    this.value = value;
  }
}

export function createLinkedList(): A {
  let fourth = new A(4);
  let third = new A(3, fourth);
  let second = new A(2, third);
  return  new A(1, second);
}

export function iterateList(linkedList: A|undefined, cb: (a: A) => void) {
  let currentElement = linkedList;
  while (currentElement) {
    cb(currentElement);
    currentElement = currentElement?.next;
  }
}

// ignore undefined
export function changeLinkedListDirection(linkedList: A): A {
  let currentElement: A = linkedList;
  let prevElement: A|undefined;
  let nextElement: A;
  while (currentElement) {
    nextElement = currentElement.next!;
    currentElement.next = prevElement;
    prevElement = currentElement;
    currentElement = nextElement;
  }

  return prevElement as A;
}

