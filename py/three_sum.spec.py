import unittest

from py.three_sum import Solution

class Test3Summ(unittest.TestCase):

    def test_1(self):
      s = Solution()
      res = s.threeSum([-1,0,1,2,-1,-4])
      self.assertEqual(res, [[-1,-1,2],[-1,0,1]])


    def test_2(self):
      s = Solution()
      res = s.threeSum([0,0,0])
      self.assertEqual(res, [[0,0,0]])


if __name__ == '__main__':
    unittest.main()