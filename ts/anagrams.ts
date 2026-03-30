export function getGroupedAnagrams(words: string[]): number {
  // total complexity l * n * log(n) where n is the max size of the word and l is the length of the array
  const groups = new Map<string, string[]>();
  for (const word of words) {
    // n*log(n) where n is number of characters is default sort complexity
    const sortedWord = word.split('').sort().join('');
    if (groups.has(sortedWord)) {
      groups.get(sortedWord)!.push(word);
    } else {
      groups.set(sortedWord, [word]);
    }
  }
  return groups.size;
}