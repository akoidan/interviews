import unittest
from py.daily_temperatures import Solution
class TestStringMethods(unittest.TestCase):

    # def test_upper(self):
    #     s = Solution()
    #     self.assertEqual(s.dailyTemperatures([38,30,36,35,40,28]),  [4,1,2,1,0,0])

    def test_upper(self):
        s = Solution()
        self.assertEqual(s.dailyTemperatures([30,38,30,36,35,40,28]),  [1,4,1,2,1,0,0])
    #
if __name__ == '__main__':
    unittest.main()