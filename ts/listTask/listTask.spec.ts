import {A, changeLinkedListDirection, createLinkedList, iterateList} from "./listTask";


describe("LinkedList", () => {
  it("should iterate", () => {
    let a: A = createLinkedList();
    let runs = [
      1, 2, 3, 4
    ];
    let i = 0;
    iterateList(a, (v: A) => {
      expect(v).toHaveProperty("value", runs[i]);
      i++;
    });
  });

  it("shouldChangeDirection", () => {
    let a: A = createLinkedList();
    a = changeLinkedListDirection(a);
    let runs = [
      4, 3, 2, 1
    ];
    let i = 0;
    iterateList(a, (v: A) => {
      expect(v).toHaveProperty("value", runs[i]);
      i++;
    });
  });

});
