export function distributeCandies(candyType: number[]): number {
  let result: Record<number, number> = {}
  candyType.forEach(c => {
    if (!result[c])  {
      result[c] = 0;
    }
    result[c]++;
  })
  return Math.min(Object.keys(result).length, candyType.length /2 )
  // {1: 2, 2: 2, 3: 2} - 3, length/2 = 6/2 = she eats 3 candies, how many different types of 3? -
};
