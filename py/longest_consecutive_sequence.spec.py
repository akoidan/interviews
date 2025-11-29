import unittest

from py.longest_consecutive_sequence import Solution

class TestLongestConsecutiveSequence(unittest.TestCase):

    def test_4(self):
      s = Solution()
      res = s.longestConsecutive([2,20,4,10,3,4,5])
      self.assertEqual(res, 4)

    def test_9(self):
      s = Solution()
      res = s.longestConsecutive([0,3,7,2,5,8,4,6,0,1])
      self.assertEqual(res, 9)

if __name__ == '__main__':
    unittest.main()