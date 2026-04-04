import {solution} from "./nebius-1";

describe("nebius 1", () => {
  it("ex1", () => {
    expect(solution([1], 0)).toEqual(1);
  });
});
'use strict';

import { throws } from "assert";

/*
We need to implement a data structure which has 3 operations:

add(x) – adds an element to it.
delete(x) – removes an element from it. If x is not present in the data structure, it be ignored.
get_unique() – returns some element uniquely represented in the data structure. If the data structure has no unique elements then get_unique() should return null .


    add(1)
    get_unique() -> 1
    add(2)
    get_unique() -> 1 // or 2
    add(1)
    get_unique() -> 2
    add(3)
    get_unique() -> 3 // or 2
    add(2)
    add(3)
    get_unique() -> null

*/

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';

process.stdin.on('data', function(inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function(): void {
  // now we can read/parse input
});
class Solution {
  allElements: Record<string, number> = {}
  singleElements: Record<string, number> = {}

  getUnique(): number|null {

    let keys = Object.keys(this.singleElements);
    console.log(`getUnique keys=${JSON.stringify(keys)} allElements=${JSON.stringify(this.allElements)} singleElements=${JSON.stringify(this.singleElements)},`)
    console.log('getUniq')
    if (keys.length === 0) {
      console.log('get unique null');
      return null
    }

    return parseInt(keys[0]);
  }

  deleteElement(n: Number) {
    if (!this.allElements[String(n)]) {
      return;
    }
    this.allElements[String(n)] --;
    if (this.allElements[String(n)] === 1) {
      this.singleElements[String(n)] = 1;
    } else if (this.allElements[String(n)] === 0) {
      delete this.singleElements[String(n)];
      delete this.allElements[String(n)];
    }
  }

  add(n: Number) {
    console.log(`before add ${n} allElements=${JSON.stringify(this.allElements)} singleElements=${JSON.stringify(this.singleElements)}`)
    if (this.allElements[String(n)] == undefined) {
      this.allElements[String(n)] = 1;
      this.singleElements[String(n)] = 1;
    } else {
      this.allElements[String(n)]++;
      delete this.singleElements[String(n)]
    }
    console.log(`after add ${n} allElements=${JSON.stringify(this.allElements)} singleElements=${JSON.stringify(this.singleElements)}`)
  }
}

let s = new Solution();
if (s.getUnique() !== null) {
  throw Error('no element');
}

s.deleteElement(3);

s.add(3);
console.log(s.getUnique())
if (s.getUnique() !== 3) {
  throw Error('3 should return 1 unique');
}

s.add(3);

if (s.getUnique() !== null) {
  console.log('3,3');
  console.log(s.getUnique());
  throw Error('3,3  v1 should return no element');
}
s.deleteElement(3);

if (s.getUnique() !== 3) {
  throw Error('3,3 v2 should return no element');
}

s.add(4);

let res = s.getUnique();
console.log(`res =${res}`);

if (![3,4].includes(res!)) {
  throw Error('3,3 v3 should return no element');
}
