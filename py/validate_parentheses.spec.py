import unittest

from py.validate_parentheses import Solution

class Test3Summ(unittest.TestCase):

    def test_1(self):
      s = Solution()
      self.assertEqual( s.isValid('[(])'), False)


    def test_2(self):
      s = Solution()
      self.assertEqual( s.isValid('[]'), False)
if __name__ == '__main__':
    unittest.main()