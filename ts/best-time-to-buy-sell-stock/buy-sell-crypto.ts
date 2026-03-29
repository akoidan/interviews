class Solution {

  maxProfit(prices: number[]): number {
    if (prices.length < 2) {
      return 0
    }
    let l = 0;
    let r = 1;
    let maxDiff = prices[r] - prices[l];
    while (r < prices.length - 1) {
        if (prices[l] > prices[r]) {
          l = r
        }  else {
          maxDiff = Math.max(prices[r] - prices[l], maxDiff);
        }
        r++;
    }
    return maxDiff;
  }
}



export {Solution}
