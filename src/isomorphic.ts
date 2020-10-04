export function isIsomorphic(a: string, b: string): boolean {
  const map: { [id: string]: string } = {};
  if (a.length != b.length) {
    return false;
  }
  for (let i = 0; i <= a.length; i++) {
    let ai: string = a[i];
    let bi: string = b[i];
    let bInValues = Object.values(map).indexOf(bi) >= 0;
    let aMappedTo = map[ai];
    // if A has a different mapping
    if (!!aMappedTo && aMappedTo != bi) {
      return false;
    }
    // if A has no mapping, but B has
    if (!aMappedTo && bInValues) {
      return false
    }
    map[ai] = bi;
  }
  return true;
}

