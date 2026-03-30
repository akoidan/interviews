
export function l3NoMapSolution(word: string): string {
  // check string length if it's 0 1
  let l = 0;
  let r = 1;
  let anotherLetter: string|null = null;
  let resStart = 0;
  let resEnd = 1;
  for (let i = 1; i < word.length; i++) {
    if (anotherLetter === null) {
      if (word[i] !== word[l]) {
        r = i;
        anotherLetter = word[r];
      }
      // left letter is always gonna be the start of the sequence
      // anotherLetter is gonna be 2nd unique lette rin the sequence
      // move pointer until we find 2nd letter
      continue;
    }
    if ([word[l],anotherLetter].includes(word[i])) {
      if (word[i] !== word[i-1]) {
        r = i;
      }
      // right pointer points to the start of the sequence of the same characters e.g. aaaaaaa
      // if the a character switches, this means the start of the sequence should switch as well
      continue;
    }
    // if we didnt continue on top, then we met 3rd character
    if (i -l > resEnd - resStart) {
      resStart = l;
      resEnd = i;
    }
    l = r;
    anotherLetter = word[i]
    r = i;
  }
  if (word.length -l > resEnd - resStart) {
    resStart = l;
    resEnd = word.length;
  }

  return word.substring(resStart, resEnd);
}


export function l3(word: string): string {
  const res = new Map<string, number>();
  let start = 0;
  let result = '';
  for (let i = 0; i < word.length; i ++) {
    res.set(word[i], (res.get(word[i]) ?? 0) + 1);
    while (res.size > 2) {
      res.set(word[start], res.get(word[start])! - 1);
      if (res.get(word[start])! <= 0) {
        res.delete(word[start]);
      }
      start ++;
    }
    let resultCandidate = word.substring(start, i + 1)
    if (resultCandidate.length > result.length) {
      result = resultCandidate;
    }
  }
  return result;
}