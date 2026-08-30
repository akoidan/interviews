class Solution {
  
    start = 'a'.charCodeAt(0);
    end = 'z'.charCodeAt(0);
    startB = `A`.charCodeAt(0)
    endB = `Z`.charCodeAt(0)
  
    startN = '0'.charCodeAt(0)
    endN = `9`.charCodeAt(0)
    
    isChar(c) {
      let cc = c.charCodeAt(0);
      if (cc >= this.start &&  cc <= this.end) {
        return true;
      }
      if (cc >= this.startB &&  cc <= this.endB) {
        return true;
      }
      
      if (cc >= this.startN &&  cc <= this.endN) {
        return true;
      }
      return false;
    }
  
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
      
      let l = 0;
      let r = s.length - 1;
      while (l <= r) {
        while (!this.isChar(s[l]) && l < r) {
          l++
        }  
        while (!this.isChar(s[r]) && l < r) {
          r--
        }
        // TODO out of bounds
        if (s[l].toLowerCase() != s[r].toLowerCase()) {
          return false;
        }
        l++;
        r--;
      }
      
      return true;
    }
}



const s = new Solution();

expEq(s.isPalindrome(`Was it a car or a cat I saw?`), true)
expEq(s.isPalindrome(`0P`), false)


function expEq(a, b) {
  if (a != b) {
    throw Error(`Expected ${a} == ${b}`)
  }
}
