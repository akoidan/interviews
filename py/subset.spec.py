import unittest

from py.subset import Solution

class Test3Summ(unittest.TestCase):

    def test_1(self):
      s = Solution()
      self.assertEqual( s.subsets([1,2,3]), [[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]])

if __name__ == '__main__':
    unittest.main()