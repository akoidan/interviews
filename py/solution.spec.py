import unittest
from py.solution import Solution
class TestStringMethods(unittest.TestCase):

    def test_upper(self):
        s = Solution()
        slide_window = s.maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)
        self.assertEqual(slide_window, [3,3,5,5,6,7])

if __name__ == '__main__':
    unittest.main()