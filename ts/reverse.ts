function reverseArray(words: string[]): string[] {
  return words.reverse();
  // for (let i = 0; i < words.length / 2; i++) {
  //   let buff = words[words.length - i -1];
  //   words[words.length - i-1] = words[i];
  //   words[i] = buff;
  // }
  // return words;
}

function rotate(input:string) {
  let words = input.split(' ');
  let output;
  words = reverseArray(words);
  output = words.join(' ');
  return output;
}


export {rotate, reverseArray}
