function findSmallest(array: number[]) {
  let smallest = 1;
  let sortedReverse = array.sort();
  for (let e of sortedReverse) {
    if (e < smallest) {
      continue
    } else if (e === smallest) {
      smallest = e + 1;
    }
  }
  return smallest;
}

export {findSmallest}