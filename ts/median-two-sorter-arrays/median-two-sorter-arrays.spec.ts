import {findMedianSortedArrays} from "./median-two-sorter-arrays";


test("ex3 ", () => {
  expect(findMedianSortedArrays([1,3], [2])).toEqual(2)
});


test("ex2 ", () => {
  expect(findMedianSortedArrays([1,2,3,4,5], [1,4,6,9])).toEqual(4)
});


test("ex1 ", () => {
  expect(findMedianSortedArrays([1,2,3,4,5], [1,4])).toEqual(3)
});


test("ex5 ", () => {
  expect(findMedianSortedArrays([2,3], [3,4])).toEqual(3)
});

test("ex7 ", () => {
  expect(findMedianSortedArrays([1,2], [3,4])).toEqual(2.5)
});

test("ex8 ", () => {
  expect(findMedianSortedArrays([], [1])).toEqual(1)
});

test("ex9 ", () => {
  expect(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17])).toEqual(9)
});

test("ex10 ", () => {
  expect(findMedianSortedArrays([], [2,3])).toEqual(2.5)
});